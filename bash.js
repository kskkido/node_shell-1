var commands = require('./commands');


process.stdin.on('data', function (data) {
	var cmd = data.toString().trim();
	commands[cmd]();
})
