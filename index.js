const express = require("express");
let app = express();
const fs = require("fs");
let date = new Date();
let da = JSON.stringify(date.getTime());
app.get("/", function (req, res) {
  res.send("Hi There");
});
app.get("/create", function (req, res) {
  fs.writeFile(`time-date/${da}.txt`, JSON.stringify(date), function (err) {
    if (err) throw err;
  });
  res.send("file created");
});

app.get("/create/view", function (req, res) {
  fs.readdir(`time-date`, "utf-8", function (err, data) {
    console.log(data);
    res.send(data);
  });
});

app.listen(3005);
