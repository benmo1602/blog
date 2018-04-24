const http = require("http");
Request = (requst, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("hello world");
  response.end();
};
http.createServer(Request).listen(8888);
