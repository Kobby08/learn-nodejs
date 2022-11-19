const fs = require("fs");

const readStream = fs.createReadStream("docs/blog3.txt", { encoding: "utf-8" });

const writeStream = fs.createWriteStream("docs/blog4.txt");

// readStream.on("data", (chunk) => {
//   console.log("-------NEW CHUNK------");
//   console.log(chunk);

//   writeStream.write("-------NEW CHUNK------");
//   writeStream.write(chunk);
// });

// piping
// used to write data from a read stream to a write stream

readStream.pipe(writeStream);
