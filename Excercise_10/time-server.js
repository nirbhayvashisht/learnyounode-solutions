const port = process.argv[2];

const net = require("net");

//we are passing a function which is a connection listner
//it is called more than once
//every connection recieved by the server gives a call to the listner
const server = net.createServer(function (socket) {
  let date = new Date();
  let year = date.getFullYear();
  let month = addZero(date.getMonth() + 1); //added 1 because months starts at 0
  let day = addZero(date.getDate());
  let hours = addZero(date.getHours());
  let minutes = addZero(date.getMinutes());

  let completeDate = year+'-'+month+'-'+day+" "+hours+":"+minutes;
  socket.end(completeDate+"\n");
});
server.listen(port);

function addZero(number) {
  //here we are adding 0 in front of the numbers less than 10 to fit the format
  return number < 10 ? "0" + number : number;
}

//Official Answer
/*
    'use strict'
    const net = require('net')
    
    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      const d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }
    
    const server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))

*/