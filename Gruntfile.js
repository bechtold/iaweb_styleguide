module.exports = function (grunt) {
  var gulp = require('gulp'),
      styleguide = require('sc5-styleguide');


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
        files: ['{,*/}*', '!node_modules/**', '!_site/**', '!css/**', '!styleguide/**'],
        //files: ['gruntfile.js']
        // runs the task `sass` whenever any watched file changes
        tasks: ['sass', 'jekyll:dist', 'gulp:styleguide-generate', 'gulp:styleguide-applystyles']
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
                //'jekyll:serve'
                'browserSync'
            ],
      options: {
        logConcurrentOutput: true
      }
    },

    // lint the sass files
    sasslint: {
        options: {
            configFile: '.sass-lint.yml',
        },
        target: ['scss/*.scss']
    },

    // Browsersync
    browserSync: {
      bsFiles: {
        src : '_site/css/*.css'
      },
      options: {
        server: {
          baseDir: "./_site/"
        }
      }
    },

    gulp: {
      'styleguide-generate': function() {
        var outputPath = 'styleguide';
        return gulp.src(['scss/*.scss'])
            .pipe(styleguide.generate({
              title: 'My Styleguide',
              // If you want to have the styleguide available on http://localhost:2000 uncomment the next three lines
              // and comment out the line "appRoot".
              // You should then also ignore the styleguide folder in _config.yml then the styleguide would not be
              // deployed with the live site.
              // If you want to deploy with the live site and have it available under /styleguide leave like this.
              //server: true,
              //rootPath: outputPath,
              //port: 2000,
              appRoot: '/styleguide',
              overviewPath: 'README.md'
            }))
            .pipe(gulp.dest(outputPath));
      },
      'styleguide-applystyles': function() {
        gulp.src('css/uxd.css')
            .pipe(styleguide.applyStyles())
            .pipe(gulp.dest('styleguide'));
      }
    }

  });


  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-sass-lint');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-gulp');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'jekyll:dist', 'gulp:styleguide-generate', 'gulp:styleguide-applystyles', 'concurrent']);

};
