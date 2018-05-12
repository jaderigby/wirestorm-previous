'use strict';

var poststylus = function() {
  return require('poststylus')(['lost'])
};


module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jade: {
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
					src: '*.jade',
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
			jade: {
				files: ['__pages__/*.jade', '__pages__/__core__/*.jade'],
				tasks: 'jade',
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
