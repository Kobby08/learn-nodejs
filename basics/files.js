const fs = require("fs");

// read files
fs.readFile("docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// write files
fs.writeFile("docs/blog2.txt", "Hello World", () => {
  console.log("File write is done");
});

// overwrite files
fs.writeFile("docs/blog1.txt", "Hello Peter Pan", () => {
  console.log("File write is done");
});

// delete files
fs.unlink("docs/blog2.txt", (err) => {
  if (err) throw err;
  console.log("document has been deleted");
});

// directories
const dir = "./assets";
const fileExists = fs.existsSync(dir);
if (fileExists) {
  fs.rmdir(dir, () => {
    console.log("directory removed");
  });
} else {
  fs.mkdir(dir, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("directory created");
  });
}
