module.exports = function(grunt) {
	grunt.initConfig({
		'watch': {
			options: {
				livereload: true
			},
			css: {
				files: ['css/**/*.scss'],
				tasks: ['sass']
			},
			rest: {
				files: ['**/*']
			}
		  // somecss: {
	   //    files: 'css/**/*',
	   //    tasks: []
	   //  },
	   //  js: {
	   //    files: 'js/**/*',
	   //    tasks: ['concat']
	   //  },
	   //  img: {
	   //  	files: 'img/**/*',
	   //  	tasks: []
	   //  },
	   //  html: {
	   //  	files: './*.html',
	   //  	options: {
	   //  		livereload: true
	   //  	}
	   //  }
		},

		'http-server': {
			'dev': {
 
		      // the server root directory 
		      root: './',

		      // the server port 
		      // can also be written as a function, e.g. 
		      // port: function() { return 8282; } 
		      port: 8000,

		      // the host ip address 
		      // If specified to, for example, "127.0.0.1" the server will 
		      // only be available on that ip. 
		      // Specify "0.0.0.0" to be available everywhere 
		      host: "0.0.0.0",

		      runInBackground: true
		    }

		},

		sass: {                              // Task
		    dist: {                            // Target
		      files: {                         // Dictionary of files
		        'css/main.css': 'css/main.scss'
		      }
		    }
		}
	});

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['http-server', 'sass', 'watch']);
};
