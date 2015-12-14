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
    }

  });

  grunt.loadNpmTasks('grunt-jekyll');

  // Default task(s).
  //grunt.registerTask('default', ['uglify']);

};
