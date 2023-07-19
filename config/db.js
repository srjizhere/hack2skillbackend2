const mongoose = require("mongoose");

// Connect to MongoDB
const connection = mongoose.connect("mongodb://localhost:27017/videosDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
    connection
}


