module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jekyll: { // Task
      options: { // Universal options
        bundleExec: true,
        src: '<%= app %>'
      },
      dist: { // Target
        options: { // Target options
          dest: '<%= dist %>',
          config: '_config.yml'
        }
      },
      serve: { // Another target
        options: {
          serve: true,
          dest: '_site',
          drafts: true,
          future: true
        }
      }
    },


    // Grunt-sass 
    sass: {
      app: {
        // Takes every file that ends with .scss from the scss 
        // directory and compile them into the css directory. 
        // Also changes the extension from .scss into .css. 
        // Note: file name that begins with _ are ignored automatically
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      },
      options: {
        sourceMap: false,
        outputStyle: 'nested',
        imagePath: "../",
      }
    },

    // Grunt-contrib-watch
    watch: {
      sass: {
        // Watches all Sass or Scss files within the scss folder and one level down. 
        // If you want to watch all scss files instead, use the "**/*" globbing pattern
        files: ['scss/{,*/}*.{scss,sass}'],
        // runs the task `sass` whenever any watched file changes 
        tasks: ['sass']
      },
      options: {
        // Sets livereload to true for livereload to work 
        // (livereload is not covered in this article)
        //        livereload: true,
        //        spawn: false
      }
    },

    // run tasks in parallel
    concurrent: {
      serve: [
                'watch',
                'jekyll:serve'
            ],
      options: {
        logConcurrentOutput: true
      }
    },
    
  });


  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');

  // Default task(s).
  grunt.registerTask('default', ['concurrent']);

};
