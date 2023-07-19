const mongoose = require('mongoose')

// Define video schema and model
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  publishedDate: Date,
  thumbnails: Object,
});

const VideoModel = mongoose.model("Video", videoSchema);

module.exports = {
    VideoModel
}



