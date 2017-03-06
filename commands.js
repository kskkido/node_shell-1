var fs = require('fs');
var request = require('request');

module.exports = {




	// The stdin 'data' event fires after a user types in a line
	pwd: function(file, func) {
		func(process.env.PWD)
	},

	date: function(file, func) {
	  	var nowDate = new Date();
	  	func(nowDate.toString());
	},
	ls: function(file, func) {
		fs.readdir('.', function(err, files) {
	  		if(err) throw err;
	  		var concatFile = '';
	  		files.forEach(function(file) {
	  			concatFile += file.toString()+'\n';
	  		})

	  		func(concatFile);
	  	})
	},
	echo: function(str, func) {
		func(str);
	},
	cat: function(file, func) {
		fs.readFile(file, function(err, data) {
			if (err) throw err;
			func(data.toString());
		})
	},
	head: function(file, func) {
		fs.readFile(file, function(err, data) {
			if (err) throw err;
			func(data.toString().split("\n").slice(0,5).join("\n"));
		})
	},
	tail: function(file, func) {
		fs.readFile(file, function(err, data) {
			if (err) throw err;
			func(data.toString().split("\n").slice(-6).join("\n"));
		})
	},
	curl: function(url, func) {
		url = 'http://www.' + url;
		request(url, function(err, response, body) {
			if(err) throw err;

			func(body);
		})
	},

	wc: function(file, func) {
		func(file.split('\n').length);
	},

	sort: function(file, func) {
		fs.readFile(file, function(err, data) {
			if (err) throw err;
			var arr = data.toString().split('\n').sort()
			func(arr.join('\n'));
		})
	},

	uniq: function(file, func) {
		fs.readFile(file, function(err, data) {
			if (err) throw err;
			var arr = data.toString().split('\n').sort()
			arr.filter(function(newLine, i, arr) {
				return newLine !== arr[i+1] 
			})
			func(arr.join('\n'));
		})
	}
}

