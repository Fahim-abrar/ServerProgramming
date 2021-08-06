//Synchronous and Asynchronous Function: diff- async er response ashar time parallely er porer line run hobe(if the other lines are not dependent on the async fn line), sync a line by line run hoy

//read write append delete rename

const fs = require("fs");

// fs.writeFile("./contents/demoFile.txt", "hello",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else
//     {
//         //sync needs 2param. async needs 3(callback fn)
// console.log("hi")
//     }
// });

// fs.writeFileSync("./contents/demoFile.txt", "hello");

// fs.appendFileSync("./contents/demoFile.txt", "\n hi");

// fs.rename("./contents/demoFile.txt", "./contents/RenamedFile.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successful");
//     }
// });

// fs.readFile("./contents/RenamedFile.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// console.log("Before");
// fs.readFile("./contents/RenamedFile.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.appendFile("./contents/RenamedFile.txt", "Is this a Synchronous Process?", (err) => {
//         });
//         fs.readFile("./contents/RenamedFile.txt", "utf-8", (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//             }
//         })
//     }
// });
// console.log("After");

fs.unlink("./contents/RenamedFile.txt", (err) => {
    if (!err) console.log("Deleted Successfully.");
});