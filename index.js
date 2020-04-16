const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Bas. I want to go outside.");
});

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`> Application Ready on port %s.`, port);
});

module.exports = server;
