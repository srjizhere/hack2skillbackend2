const { model } = require("mongoose");
const {  VideoModel } = require("../model/video.model");


const searchContoller = async (req, res) => {
  try {
    const query = req.query.q;

    const video = await VideoModel.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    }).limit(20);

    res.send({ video: video });
  } catch (error) {
    res.send(`error ${error.message}`);
  }
};


module.exports = {
    searchContoller
}