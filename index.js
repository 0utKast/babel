import http from "http"; // ES6 syntax
double = a => a * 2
const requestHandler = function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
};
const server = http.createServer(requestHandler);
server.listen(8080);


