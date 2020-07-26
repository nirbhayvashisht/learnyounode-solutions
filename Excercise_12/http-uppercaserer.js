//AIM
/*
  Create a file named http-uppercaserer.js.  
   
  Write an HTTP server that receives only POST requests and converts  
  incoming POST body characters to upper-case and returns it to the client.  
   
  Your server should listen on the port provided by the first argument to  
  your program.  
*/

const port = process.argv[2];

const http = require('http');
const map = require('through2-map');

var server = http.createServer(function(request, response) {
    console.log(request.body);
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});

server.listen(port);

//Official Solution
/*
    'use strict'
    const http = require('http')
    const map = require('through2-map')
    
    const server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))

*/