module.exports = function(grunt){
	// config
	grunt.initConfig({
		watch:{
			options:{
				livereload: true
			},
			html:{
				files:'**.html',
				options: {
			        livereload: true
			    }
			},
			css:{
				files:'css/*.css',
				options: {
			        livereload: true
			    }
			}
		},
		connect: {
		  server: {
		    options: {
		      port: 9002,
		      livereload: true
		    }
		  }
		},
    sass: {
      options:{
        compass: true
      },
      dist: {
        files: {
          'css/tedhis.css':'scss/tedhis.scss'
        }
      }
    }
	});

	// load the plugin  that provides the "uglify" task
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');
	// default task
  grunt.registerTask('default',['connect','watch'] );
	grunt.registerTask('compile-sass',[ 'sass'] );

};