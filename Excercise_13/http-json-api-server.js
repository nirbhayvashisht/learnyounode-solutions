var http = require('http');
var url  = require('url');

var portNumber = process.argv[2];

function formatDate(date) {
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
}

function formateUnix(date) {
    return {
        unixtime: date.getTime()
    };
}

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    var urlObj = url.parse(req.url, true);
    
    var route = urlObj.pathname;
    var date = new Date(urlObj.query.iso);
    
    if (route == '/api/parsetime') {
        var data = formatDate(date);
    } else if(route == '/api/unixtime') {
        var data = formateUnix(date);
    }
    
    res.end(JSON.stringify(data));
});

server.listen(portNumber);

//Official Answer
/*
'use strict'
const http = require('http')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function (req, res) {
  const parsedUrl = new URL(req.url, 'http://example.com')
  const time = new Date(parsedUrl.searchParams.get('iso'))
  let result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))

*/