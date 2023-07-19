const { VideoModel } = require("../model/video.model");

const videoController = async (req, res) => {
  console.log("video controller visited");
  try {
    const page = req.query.page || 1;

    // const totalCount = await VideoModel.countDocuments();
    // const totalPage = Math.ceil(totalCount / 10);

    const video = await VideoModel.find()
      .sort({ publishedDate: -1 })
      .skip((page - 1) * 10)
      .limit(10);
      // console.log({ currentPage: page, totalPage: totalPage, video });
    res.send({  video });
  } catch (error) {
    res.send({"error" :error.message});
  }
};

module.exports = {
    videoController
}
