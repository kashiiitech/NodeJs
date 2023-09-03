const fs = require('fs');

// Read file function
// fs.readFile('file.txt', 'utf-8', (err, data) => {  // firle, endcoding and callback function
//   console.log(err, data);
// })


// here the nodejs will intentionally block
// const a = fs.readFileSync('file.txt')
// console.log(a.toString())

// Writing into the file

// fs.writeFile('file2.txt', "This is the data in file2", ()=>{
//   console.log("Written to the File")
// })


b=fs.writeFileSync("file2.txt", "This is the data")
console.log(b)

// callback funtion will only execute if it's all the content has been successfully read and content will be ready
// this is the reason why the below line  comes first
// Non blocking I/O model the above thread will be executed at the same time the below line will be executed there will be no delay

console.log("Finished Reading file...")  // this will appear first
