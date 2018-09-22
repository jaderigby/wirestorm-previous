'use strict';

var poststylus = function() {
  return require('poststylus')(['lost'])
};


module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		pug: {
			compile: {
				options: {
					pretty: true,
					data: {
						debug: false
					}
				},
				files: [{
					expand: true,
					cwd: '__pages__/',
					src: '*.pug',
					dest: 'app/',
					ext: '.html'
				}]
			}
		},
		stylus: {
			compile: {
				options: {
					compress: false,
					use: [
						require('nib'),
						require('rupture'),
						poststylus
					]
				},
				files: {
					'app/css/main.css': '__styles__/*.styl'
				}
			}
		},

		watch: {
			pug: {
				files: ['__pages__/*.pug', '__pages__/__core__/*.pug'],
				tasks: 'pug',
				options: {
					livereload: true,
				},
			},
			stylus: {
				files: ['__styles__/*.styl'],
				tasks: 'stylus',
				options: {
					livereload: true,
				},
			}
		}
	});

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default',['watch']);

};
