const express = require('express');
const nunjucks = require("nunjucks");

const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get("/", function (req, res) {
  return res.render("index");
});

let port = 3000;
server.listen(port, () => {
  console.log(`Server on port: ${port}`)
})