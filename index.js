const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const {connection} = require("./config/db");
const { VideoModel } = require("./model/video.model");
const { searchRouter } = require("./routes/search.router");
const { videoRouter } = require("./routes/video.router");

const app = express();
app.use(express.json());
app.use(cors());


const port = process.env.PORT  || 8080;
const apiKeys = process.env.YOUTUBE_API.split(',') || []
(async function(){
  await connection;
})()



let currentApiKeyIndex = 0; // starting the api from first index


function RotateAPIKey() {
  // fuction to change the api key
  const apiKey = apiKeys[currentApiKeyIndex];
  currentApiKeyIndex = (currentApiKeyIndex + 1)   %  apiKeys.length;
  return apiKey;
}

// setInterval(async () =>
//   // 10  sec of  interval storing the latest videos

//   {
//     const currentApiKey = RotateAPIKey(); // Rotate the API
//     const res = await axios.get(
//       `https://www.googleapis.com/youtube/v3/search`,
//       {
//         params: {
//           key: currentApiKey,
//           q: "morning tea",
//           part: "snippet",
//           maxResults: 20,
//           type: "video",
//           order: "date",
//         },
//       }
//     );

//     const video = res.data.items.map((item) => ({
//       title: item.snippet.title,
//       description: item.snippet.description,
//       publishedDate: item.snippet.publishedAt,
//       thumbnails: item.snippet.thumbnails,
//     }));

//     await VideoModel.insertMany(video);
//   }, 10000);

app.get("/", (req, res) => {
  res.status(200).send({msg:"This is the base URL of Assignment2"});
});

app.use( "/api/videos",videoRouter);
app.use("/api/search",searchRouter);

app.listen(port, async () => {

  console.log("Server started at port"+ port);
});
