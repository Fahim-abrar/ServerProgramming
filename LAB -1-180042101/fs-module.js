//Synchronus and Asynchronus Function

//readFile

//writeFile

//AppendFile

//Delete

//Rename

const fs = require('fs');

//fs.writeFileSync('./contents/demoFile.txt', 'We are learning Nodejs.');
//fs.appendFileSync('./contents/demoFile.txt', 'We are learning Javascript.');

/*fs.rename('./contents/demoFile.txt', './contents/Rename.txt', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('rename successful');
  }
});*/

/*fs.readFile('./contents/Rename.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});*/

/*console.log('before');
fs.readFile('./contents/Rename.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.appendFile('./contents/Rename.txt', 'Synchronous.', (err) => {
      console.log(err);
    });
    fs.readFile('./contents/Rename.txt', 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
});
console.log('after');*/

fs.unlink('./contents/Rename.txt', (err) => {
  if (!err) console.log('Deleted Successfully!');
});