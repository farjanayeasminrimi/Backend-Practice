const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello from server in homepage");
  }
  if (req.url === "/about-us") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hi there from about page");
  }
});

server.listen(5000, () => {
  console.log("server is running on 5000 port");
});
