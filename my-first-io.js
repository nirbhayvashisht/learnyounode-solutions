const fs = require('fs');

const path = process.argv[2];

let buf = fs.readFileSync(path);

let fileContent = buf.toString();
console.log((fileContent.split('\n').length)-1);