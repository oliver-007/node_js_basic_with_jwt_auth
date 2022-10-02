const http = require("http");

http
  .createServer((req, res) => {
    res.end("hello, this is oliver");
  })
  .listen(3000, () => {
    console.log("server is running at port: 3000");
  });
