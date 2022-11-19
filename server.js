const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request made");
  console.log(req.url, req.method);

  // set response headers
  res.setHeader("Content-Type", "text/html");

  //basic routing
  let path = "views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me": // redirection
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;

    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send html file to browser
  try {
    data = fs.readFileSync(path, { encoding: "utf-8" });
    res.write(data);
    res.end();
  } catch (error) {
    console.log(error);
  }
});

server.listen(3000, "localhost", () => {
  console.log("listening to request at port 3000");
});
