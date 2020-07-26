let http = require("http");
let fs = require("fs");

let port = process.argv[2];
let fileLocation = process.argv[3];

const server = http.createServer((request, response) => {
  let stream = fs.createReadStream(fileLocation);
  stream.pipe(response);
});
server.listen(port);

//Official Answer
/*
    'use strict'
    const http = require('http')
    const fs = require('fs')
    
    const server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
    
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))
*/