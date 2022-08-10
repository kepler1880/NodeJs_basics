const fs = require("fs");

fs.readFile("./readme.txt", "UTF-8", (err, readFileData) => {
  console.log(readFileData);
});

console.log("reading the file...");