var commands = require('./commands');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
	var cmd = data.toString().trim();
	if (cmd.slice(0, 4) === "echo") {
		var echo = cmd.slice(0, 4);
		var str = cmd.slice(5);
		commands[echo](str);
	}
	else {
		commands[cmd]();
	}
})
