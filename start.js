var cp = require('child_process');
var grunt = cp.spawn('grunt', ['--force', 'default', 'watch'])

grunt.stdout.on('data', function(data) {
	// relay output to console
	console.log("%s", data)
});

const opn = require('opn');

var express = require('express');

var path = require('path');

var app = express()

app.use(express.logger('dev'));

app.use(express.static(path.join(__dirname, 'app')));

opn('http://localhost:3000');

app.listen(3000);