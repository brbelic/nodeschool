var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]);


var string = buff.toString();

var splitedString = string.split("\n");;

var numberOfNewlines = splitedString.length -1;
console.log(numberOfNewlines);