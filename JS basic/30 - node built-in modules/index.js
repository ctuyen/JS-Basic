//module in NodeJS
var fs = require('fs');

//read a file
var text = fs.readFileSync('./song.txt', { encoding: 'utf8' });
console.log(text);

//write in a file
fs.writeFileSync('./song2.txt', 'ahihi I written done');
