var fs = require('fs');
fs.readFile(process.argv[2], function callback(err, buff) {
	if(err) {
		console.log(err);
		return;
	}

	var string = buff.toString();

var splitedString = string.split("\n");;

var numberOfNewlines = splitedString.length -1;
console.log(numberOfNewlines);
});


