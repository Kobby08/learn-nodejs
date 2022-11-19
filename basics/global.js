// Global Object
global.setTimeout(() => {
  console.log("Time out dude");
  clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
  console.log("This is an interval");
}, 1000);

// absolute paths of directories and files
console.log(__dirname);
console.log(__filename);
