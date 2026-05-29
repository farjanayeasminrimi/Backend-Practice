const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello from server in homepage");
  }
});

server.listen(5000, () => {
  console.log("server is running on 5000 port");
});
