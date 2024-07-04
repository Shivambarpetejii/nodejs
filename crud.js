const fs = require('fs');
const path = require('path');

const dirpath = path.join(__dirname,'files');

const filePath = `${dirpath}/appp2.txt`;
// creation 

// fs.writeFileSync(filepath,'this is normal file');

// read the file

// fs.readFile(filePath,'utf8',(err,i)=>{
//     console.log(i);
// })

//update

// fs.appendFile(filePath,' hii me bhi aa gya hu',(err)=>{if(!err)console.log("this is update");});

// rename

// fs.rename(filePath,`${dirpath}/arr1.txt`,(err)=>{console.log("rename !!");});

//delete

fs.unlinkSync(filePath);

