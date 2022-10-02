const http = require("http");

const PORT = 5000;

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/html" });
  res.write(" <h2>this is from server </h2>");
  res.end();
});

myServer.listen(PORT, () => {
  console.log(`server is running at : ${PORT}`);
});
