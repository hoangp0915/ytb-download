const express = require("express");
const request = require("request");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const ytdl = require("ytdl-core");
const path = require("path");
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/download", function (req, res) {
  var URL = req.query.URL;
  res.header(
    "Content-Disposition",
    'attachment; filename="music-download.mp3"'
  );
  const ytdl = ytdl(URL, {
    format: "mp4",
  }).pipe(res);
});

app.listen(port, () => {
  console.log("App running in port: " + port);
});
