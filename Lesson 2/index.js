const fs = require("fs");

const os = require("os");

// fs.appendFile("demo.txt", "this is 3rd demo text", (error) => {
//   error ? console.log("error") : console.log("successful");
// });

// fs.readFile("demo.txt", "utf-8", (data, error) => {
//   error ? console.log(error) : console.log(data);
// });

// fs.rename("demo.txt", "text_file.txt", (error) => {
//   error ? console.log("error") : console.log("success");
// });

// fs.unlink("text_file.txt", (err) => {
//   err ? console.log(err) : console.log("Deleted Successfully");
// });

// fs.exists("demo.txt", (result) => {
//   result ? console.log("found") : console.log("not found");
// });

// fs.appendFile("demo.txt", "created demo file", (err) => {
//   err ? console.log(err) : console.log("file created");
// });

// const userInfo = os.userInfo();
// console.log(userInfo);

// const homeDir = os.homedir();
// console.log(homeDir);

// const hostName = os.hostname();
// console.log(hostName);

// console.log(
//   fs.mkdir("new folder", (err) => {
//     err ? console.log(err) : console.log("successful to make a folder");
//   })
// );
// console.log(
//   fs.rmdir("new folder", (err) => {
//     err ? console.log(err) : console.log("deleted folder");
//   })
// );

// console.log(__dirname);
// console.log(__filename);
const path = require("path");
// console.log(path);

const joinName = path.join("demo.txt", "/views");
console.log(joinName);
