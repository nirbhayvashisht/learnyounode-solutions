//Excercise 6 make-it-modular.js
const importedFunction = require('./mymodule');

const path = process.argv[2];
const ext = process.argv[3];

importedFunction(path,ext,(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    data.forEach(element => {
        console.log(element);
    });
})

/*  Given Solution
    'use strict'
    const filterFn = require('./solution_filter.js')
    const dir = process.argv[2]
    const filterStr = process.argv[3]
    
    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }
    
      list.forEach(function (file) {
        console.log(file)
      })
    })


*/