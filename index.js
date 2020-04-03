const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, everyone. I want to go outside");
});

app.get("/test", (req, res) => {
  res.send("Hello, test another endpoint.");
});

const port = 3000;
const server = app.listen(port, () => {
  console.log(`> Application Ready on port %s.`, port);
});

module.exports = server;
