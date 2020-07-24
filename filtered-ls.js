//Excercise 3
//using fs and path modules
const fs = require('fs');
const path = require('path');


const dirName = process.argv[2];
const extype = "."+process.argv[3];
/*
console.log(dirName);
console.log(extype);
*/

fs.readdir(dirName,'utf-8',(err,files)=>{
    if(err){
        console.log(err);
    }
    let filteredFiles = files.filter((file)=>{
        if(path.extname(file)==extype){
            return file;
        }
    })
    //console.log(filteredFiles);
    filteredFiles.forEach(element => {
       console.log(element); 
    });
})

/* Answer Provided
  'use strict'
    const fs = require('fs')
    const path = require('path')
    
    const folder = process.argv[2]
    const ext = '.' + process.argv[3]
    
    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })

*/
