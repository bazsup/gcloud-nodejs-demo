const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, everyone. I want to go outside");
});

const port = 3000;
const server = app.listen(port, () => {
  console.log(`> Application Ready on port %s.`, port);
});
