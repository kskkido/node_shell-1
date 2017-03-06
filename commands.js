var fs = require('fs');

module.exports = {




	// The stdin 'data' event fires after a user types in a line
	pwd: function(file) {
	  	process.stdout.write(process.env.PWD);
	  	process.stdout.write('\nprompt > ')
	},

	date: function(file) {
	  	var nowDate = new Date();
	  	process.stdout.write(nowDate.toString());
  		process.stdout.write('\nprompt > ');
	},
	ls: function(file) {
		fs.readdir('.', function(err, files) {
	  		if(err) throw err;
	  		files.forEach(function(file) {
	  			process.stdout.write(file.toString()+'\n');

	  		})
	  		process.stdout.write('\nprompt > ');
	  	})
	},
	echo: function(str) {
		process.stdout.write(str);
  		process.stdout.write('\nprompt > ');
	}
	cat: function(file) {
		
	}
}

