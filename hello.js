const http = require("http");
http
  .createServer((req, res) => {
    res.write("Hello World, welcome to WeJapa internships");
    res.end();
  })
  .listen(8080, console.log("listening on port 8080"));
