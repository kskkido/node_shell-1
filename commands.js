module.exports = {




	// The stdin 'data' event fires after a user types in a line
	pwd: function() {
			process.stdout.write('prompt > ');
			process.stdin.on('data', function (data) {
		  	var cmd = data.toString().trim(); // remove the newline
		  	if (cmd === "pwd") {
		  		process.stdout.write(process.env.PWD);
		  	}
		  	process.stdout.write('\nprompt > ')
		})
	},

	date: function() {
		process.stdout.write('prompt > ');
		process.stdin.on('data', function (data) {
	  	
		  	if (cmd === "date") {
			  	var nowDate = new Date();
			  	process.stdout.write(nowDate.toString());
		  	}
		  	process.stdout.write('\nprompt > ');
		})
	}
}

