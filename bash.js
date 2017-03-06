var commands = require('./commands');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
	var cmd = data.toString().trim().split(" ");
	if (cmd.length > 1) {
		var command = cmd[0];
		var arg = cmd.slice(1).join(" ");
		commands[command](arg, done);
	}
	else {
		commands[cmd[0]](null, done);
	}
})


function done(output) {
	process.stdout.write(output);
	process.stdout.write('\nprompt > ')
}