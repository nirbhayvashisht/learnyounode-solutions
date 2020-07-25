const server = require("./serverModule");

var output = [];
var urls = process.argv.slice(2);
let count = 0;

for (let i = 0; i < urls.length; i++) {
    server(urls[i],i,(err, data) => {
        if (err) {
        console.log(err);
        }
        output[i]=data;
        count++;

        if (count == 3) {
            printData();
        }
    });
}

function printData() {
  for (let i = 0; i < output.length; i++) {
      console.log(output[i]);
  }
}

/*
Official Solution
    'use strict'
    const http = require('http')
    const bl = require('bl')
    const results = []
    let count = 0
    
    function printResults () {
      for (let i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (let i = 0; i < 3; i++) {
      httpGet(i)
    }
*/