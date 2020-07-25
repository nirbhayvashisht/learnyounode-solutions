//Excercise 8

const http = require('http');

const url = process.argv[2];

let countChars = 0;
http.get(url,(response)=>{
    let result = "";
    response.setEncoding('utf-8');
    response.on("data",(data)=>{
        result+=data;
    })
    response.on('end',(end)=>{
        console.log(result.length);
        console.log(result)
    })
    response.on('error',console.error);
}).on('error',console.error)

//OFFICIAL ANSWER
/*
/*Use a third-party package to abstract the difficulties involved in  
  collecting an entire stream of data. Two different packages provide a  
  useful API for solving this problem (there are likely more!): bl (Buffer  
  List) and concat-stream; take your pick!  
   
  <https://npmjs.com/bl> <https://npmjs.com/concat-stream>  
   
  To install a Node package, use the Node Package Manager npm. Simply type:  
   
     $ npm install bl  
   
  And it will download and install the latest version of the package into a  
  subdirectory named node_modules. Any package in this subdirectory under  
  your main program file can be loaded with the require syntax without being  
  prefixed by './':  
   
     const bl = require('bl')  
   
  Node will first look in the core modules and then in the node_modules  
  directory where the package is located.  
   
  If you don't have an Internet connection, simply make a node_modules  
  directory and copy the entire directory for the package you want to use  
  from inside the learnyounode installation directory:  
   
  file:///usr/local/lib/node_modules/learnyounode/node_modules/bl  
  file:///usr/local/lib/node_modules/learnyounode/node_modules/concat-stream  
   
  Both bl and concat-stream can have a stream piped in to them and they will  
  collect the data for you. Once the stream has ended, a callback will be  
  fired with the data:  
   
     response.pipe(bl(function (err, data) { /* ...  }))  
     // or  
 /   response.pipe(concatStream(function (data) { /* ...  }))  
   
  Note that you will probably need to data.toString() to convert from a  
  Buffer.
    'use strict'
    const http = require('http')
    const bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
*/