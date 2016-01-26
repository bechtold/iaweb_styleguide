# Building a Website and its Frontend Living Web Style Guide using Grunt, Jekyll and SC5

## UX Day Graz Style Guide
In this project a style guide for the website UX Day Graz has been implemented with SC5.
The website was provided by Keith Andrews as a starting point to build the style guide. 
It has not been modified a lot from the original site, only improvements needed to decrease CSS specificity have been applied.
You can view the original page at [https://uxdaygraz2015.iicm.tugraz.at/](https://uxdaygraz2015.iicm.tugraz.at/).

Credits for the original website: Keith Andrews

The team implementing the style guide: Jürgen Minwegen, Cecilia Ritzén, Rayna Nikolova and [Oskar Bechtold](https://twitter.com/bechtoldster)
 
This document describes how to install and use the tools needed to generate the style guide and the page.
The descriptions only contain the techniques and tools used in this project.
For deeper understanding of the tools and other options please see the corresponding project websites or GitHub pages. Links are provided in the text.

TODO: Add a link to the presentation about the project and add the survey paper.
  

## Index
- [Quick Install Guide](#quickguide)
- [Step by Step Guide](#step-by-step-guide-with-explanation)
- [Package Setup](#setup-in-the-package.json)
- [To Take in Consideration](#to-take-in-consideration)
- [Optional Changes](#optional-changes)
- [Grunt Tasks](#grunt-tasks)

## Quick Install Guide
##### Global
- [Install Git](https://git-scm.com/downloads) (optional)
- [Install Ruby](https://www.ruby-lang.org/en/downloads/)
- [Install NodeJS](https://nodejs.org/en/download/)
- Install Bundler with __gem install bundler__
##### Project specific
- Fork Github Project <https://github.com/bechtold/iaweb_styleguide.git> or download zip
- Change into Project/Git Folder
- run __bundle install__
- run __npm install__
- run __grunt__
- open <http://localhost:3000/> in the browser

#### .gitignore Note:
When you clone this project, there is no page in _site and no style guide to view directly, you need to run the grunt task first.
Also the js/script.js and the css/style.css are ignored as they are generated files.
If you want to use a continuous integration tool you need to make sure the server either runs grunt or you add the compiled page in _site to the git.


## Step by Step Guide

In order for this project to work properly additional software has to be installed and set up.
In this section step by step instructions with further explanation will be given in order to get the project running.

### Ruby 2.3
Ruby is a dynamic and free programming language. It is needed within this project to get Jekyll running.
Ruby could also be used to compile the Sass but in this project libSass has been used, which means that only Jekyll requires Ruby.
Install the correct version of Ruby depending on the operating system.

[Official Download Webpage.](https://www.ruby-lang.org/en/downloads/)

### Bundler 1.11.0
This is a dependency manager that will be used to make sure that everyone participating in the project is using the same version of each Ruby gem. [Documentation](http://bundler.io/)
Install the current version by typing this into your console. The current working path of the shell does not matter since Bundler is going to be installed globally.
```
gem install bundler
```
With help of the following command all dependencies of the projects bundle is going to be installed automatically. Each project has it's own bundle that is defined within the 'Gemfile' file. In this case only Jekyll is included.
```
bundle install
```

### NodeJS 4.2.1
NodeJS is a JavaScript runtime environment. It uses a non blocking I/O model and is event-driven. This also needs to be installed globally.

[Official Download Webpage](https://nodejs.org/en/download/)

### Npm
NodeJS comes with JavaScript's package manager npm which is needed in order to install all dependencies used that are based on JavaScript.

[Official Webpage](https://www.npmjs.com/)

### Jekyll 3.0.11
Jekyll is a static site generator which compiles the plain text and transforms it into a static HTML webpage.

[Official Webpage](https://jekyllrb.com/)



## Setup in the package.json
The package.json contains a description of all JavaScript dependencies needed for this project. They don't need to be installed manually, this is done by running __npm install__.

### "grunt": "^0.4.5",
Grunt is a task runner based on JavaScript. With this tool it is possible to set up tasks which will be executed consecutively.

[Official Webpage](http://gruntjs.com/)

### "grunt-browser-sync": "^2.2.0"
The built-in serve function provided by Jekyll is not used by default in this project in order to run the development server.
Instead, Browsersync is used because it provides a lot more functionality like automatically refreshing the browser tab and synchronising input from multiple browsers (on installation there might be errors due to an optional dependency on Windows machines. They can be ignored, it does work without). However, in the section [Hosting the site with Jekyll or with Browsersync](#hosting-the-site-with-jekyll-or-with-browsersync) a description of how to change to Jekyll's serve function is to be found.
 
[GitHub](https://github.com/BrowserSync/grunt-browser-sync)


### "grunt-concurrent": "^2.1.0"
With concurrent it is possible to run multiple grunt tasks concurrently.

[GitHub](https://github.com/sindresorhus/grunt-concurrent)

### "grunt-contrib-clean": "^0.7.0"
Cleans all JavaScript and CSS files in the folders js and css, except the files in corresponding src folders. This is used when work in development mode is done and ready to be published.

[GitHub](https://github.com/gruntjs/grunt-contrib-clean)

### "grunt-contrib-jshint": "^0.12.0"
JSHint is used for static code analysis of JavaScript files.

[GitHub](https://github.com/gruntjs/grunt-contrib-jshint)

### "grunt-contrib-uglify": "^0.11.0"
Uglify is used to minify files, it can also beautify files. This is used to prepare files for distribution. 

[GitHub](https://github.com/gruntjs/grunt-contrib-uglify)

### "grunt-contrib-watch": "^0.6.1"
Contrib watch is keeping a close look at the project's files and runs predefined tasks whenever one of the files changes.
This makes it possible to establish a workflow and removes the necessity to manually run tasks or reload the browser at any time.

[GitHub](https://github.com/gruntjs/grunt-contrib-watch)

### "grunt-gulp": "^0.1.0"
Gulp is another task runner. It is needed to generate the SC5 style guide. SC5 only provides gulp tasks. This package allows to run gulp tasks as grunt tasks.

[GitHub](https://github.com/gratimax/gulp-grunt)

[Official Gulp Webpage](http://gulpjs.com/) 

### "grunt-jekyll": "^0.4.3"
The jekyll module provides the possibility to compile the Jekyll-based site with a grunt task.

[GitHub](https://github.com/dannygarcia/grunt-jekyll)

### "grunt-sass": "^1.1.0"
Grunt SASS compiles the SASS to CSS using libSass.

[GitHub](https://github.com/sindresorhus/grunt-sass)

### "grunt-sass-lint": "0.1.0-beta.4"
Sass Lint is a static code analyzer. It is used to improve the quality of the Scss and to make sure the Sass files follow same coding styles.

[GitHub](https://github.com/sasstools/grunt-sass-lint)

### "load-grunt-tasks": "^3.3.0"
This makes it possible to load multiple grunt tasks by using globbing patterns.
It could replace all __grunt.loadNpmTasks('xxx');__ with __require('load-grunt-tasks')(grunt);__
It has not been used in this project to keep a better overview of the loaded grunt tasks.

[GitHub](https://github.com/sindresorhus/load-grunt-tasks)

### "sc5-styleguide": "^0.3.41"
SC5 is responsible for extracting the comments from the sass files and converting them into a nice and clean style guide.

[GitHub](https://github.com/SC5/sc5-styleguide)

[Official Webpage](http://styleguide.sc5.io/)

### "grunt-sass-globbing": "^1.4.0"
This tool provides the functionality of merging multiple sass files from a folder into a single one.
So when a file is added to a folder it doesn't need to be included in the project manually.

[GitHub](https://github.comonalli/DennisBecker/grunt-sass-globbing)



## To Take in Consideration
If more than one operating system is going to be used it is necessary to add a .gitattributes files that declares line endings.
Otherwise Git can not work with line endings correctly and the Scss Linter will not work correctly.
In order to fix this a .gitattributes file within the root folder of the Git is created. The file has the following content:
```
# Declare files that will always have CRLF line endings on checkout.
*.scss eol=lf

# Denote all files that are truly binary and should not be modified.
*.png binary
*.jpg binary
```

## Optional Changes

### sass-lint-yml
In this file all options for the linting of the sass file are defined.
For this project a simple but very strict config is used.
This improves reusability of the CSS components.
```
#########################
## Sample Sass Lint File
#########################
# Linter Options
options:
  # Set the formatter to 'html'
  formatter: stylish
# File Options
files:
  ignore:
    - 'scss/_base.scss'
    - 'scss/_includes.scss'
    - 'scss/_partials.scss'
    - 'scss/_variables.scss'
    - 'scss/style.scss'
    - 'scss/base/*.scss'
# Rule Configuration
rules:
  indentation:
    - 2
    -
      size: 2
```
With the 'formatter: stylish' the output of the linter is printed to the console.
Set it to HTML to create an HTML file with the report.
Within 'ignore' all the SCSS files which should be ingored by the linting process are listed.
Indentation specifies the number of spaces used.
Other options include for example nesting depth or name formats.
All possible options can be seen in the [default configuration](https://github.com/sasstools/sass-lint/blob/master/lib/config/sass-lint.yml).

The target location for the linter is specified in the grunt task in the 'Gruntfile.js' file.
To change the destination the value for target needs to be changed according with the sasslint task.

```
// lint the sass files
    sasslint: {
        options: {
            configFile: '.sass-lint.yml',
        },
        target: ['scss/**/*.scss']
    },
```

[Sample Config](https://github.com/sasstools/sass-lint/blob/develop/docs/sass-lint.yml)

[Default Config](https://github.com/sasstools/sass-lint/blob/master/lib/config/sass-lint.yml)


### _config.yml
Jekylls configuration is done within the _config.yml file. Within this file there isn't much that needs to be changed.
With the 'exclude' option it is possible to add folders which should not be compiled by Jekyll.
The two folders scss and node_modules are added in oder to increase the compiling speed and also because those files are not needed on the live site.

If the style guide shouldn't be deployed either, an additional `exclude line` is available to switch with the current one.
This additional 'exlude line' insures that the style guide folder isn't compiled into the _site folder.

```
# exclude: ['bac', '*/bac', 'scss', 'node_modules', 'styleguide']
exclude: ['bac', '*/bac', 'scss', 'node_modules']
```

### Hosting the site with Jekyll or with Browsersync

With the default setup the webpage is hosted at localhost by running Browsersync.
This package has a lot of features which are handy regarding the workflow, like automatically refreshing the webpage and also giving the option to synchronize multiple browsers running at different devices.

In order to switch to Jekyll's serve functions a few changes need to be made.
All instructions can be found in the 'Gruntfile.js' file within the 'gulp' task.
It is also possible to change the port number to a desired value.

This is an example of how it should look like with Jekyll's server hosting enabled.
The webpage can be located at <http://localhost:2000/>.

```
gulp: {
      'styleguide-generate': function() {
        var outputPath = 'styleguide';
        return gulp.src(['scss/**/*.scss'])
            .pipe(styleguide.generate({
              title: 'My Styleguide',
              server: true,
              rootPath: outputPath,
              port: 2000,
              //appRoot: '/styleguide',
              overviewPath: 'README.md'
            }))
            .pipe(gulp.dest(outputPath));
      },
      'styleguide-applystyles': function() {
        gulp.src('css/style.css')
            .pipe(styleguide.applyStyles())
            .pipe(gulp.dest('styleguide'));
      }
    },

```
Also the concurrent task needs to be changed. Comment out the 'browserSync' task and uncomment the 'jekyll:serve' task.

```
concurrent: {
      serve: [
                'watch',
                'jekyll:serve'
                //'browserSync'
            ],
      options: {
        logConcurrentOutput: true
      }
    },
```


## Grunt Tasks
Within the 'Gruntfile.js' all the tasks which are executable with Grunt are being initialized and set up. A grunt task is run from the console by typing __grunt taskname__ but a default task is implemented so only __grunt__ needs to be typed. The dev tasks are used for development and when the work is ready to be published the distribution task needs to be run once. There are no JavaScript files used for the style guide in this project, however we have added tasks to manage with concatenation and minifying of those as well in case of future needs.

### Custom Tasks for this Project

#### grunt
This is the default task and it contains 'dev' for development mode and 'concurrent' to run several grunt tasks concurrently.

#### grunt dev
The development task generates the style guide, beautifies the CSS and JavaScript files and adds sourcemaps (references between sources and compiled files that are used in the browser). It contains the following tasks: 'sass_globbing', 'sass:dev', 'uglify:dev', 'gulp:styleguide-generate', 'gulp:styleguide-applystyles', 'jekyll:dist'.

#### grunt dist
The distribution task removes the development files within the CSS and JavaScript folder, except the src and bac folders, and recompiles everything with uglification. It contains the following tasks: 'clean', 'sass_globbing', 'sass:dist', 'uglify:dist', 'gulp', 'jekyll:dist'.

#### grunt int
This task validates and lints the Gruntfile, the source files in the JavaScript folder and the SASS files.


### Grunt Tasks in Detail
This section describes the grunt tasks provided by the open source community in detail.

#### jekyll
This task compiles the site with Jekyll.
The `bundleExec` option is needed to run Jekyll from the locally installed bundle.
There are two sub-tasks, dist and serve. Dist only compiles the site and serve also starts Jekyll's built-in server.



#### sass
Takes all files that ends with '.scss' from the scss directory and compiles them into the css directory.
With the 'cwd' option the current working directory can be changed.
With the 'src' option specific files can be chosen.
To change the destination of the generated file the 'dest' option needs to be changed.
With 'the 'ext' option the extension of the compiled file is specified.
Note that files starting with underscore are ignored, they are sass partials and are supposed to be included from other sass files.
So in this project only the style.scss is compiled, it imports all other partial files. 

#### watch
This watches all the folders within the directory for changes.
The wanted files can be defined with the 'files' option. We are watching all folders except for the ones defined with a callsign.
With the 'tasks' option it is possible to define the tasks that should be run after a change is detected.


#### concurrent
Currently the only tasks which are running at the same time are the 'watch' and the 'browserSync' tasks. Those tasks can be specified with the 'serve' option.

#### clean
Clears all the files from the JavaScript and CSS folders, except the sourcefiles. Is used when switching from development to distribution mode.

#### jshint
Validates files in the JavaScript source folder and the Gruntfile.

#### uglify
Minifies and concatenates files for distribution. Also beautifies code when working in development.

#### sasslint
Within this task the location of the configuration file is specified with the 'configFile' option and the scss files which should be linted are specified with the 'target' option.

#### browser-sync
With the 'src' option the css files which are going to be injected automatically on change are defined.
Also the base directory for the final webpage is specified with the 'baseDir' option

#### gulp
With this task the style guide is being generated.
With the 'title' option the name that can be seen in the tab of a browser can be changed.
With the variable 'outputPath' the name of the folder that will be created within the root folder can be changed.
For instruction on changing the server hosting please refer to the section [Hosting the site with Jekyll or with Browsersync](#hosting-the-site-with-jekyll-or-with-browsersync) in this documentation.

#### sass_globbing

This task handles the migration of the different SCSS files into a single one.
The first part of the 'files' option defines the name of the finished scss file.
With the second part of the option the files that should be merged are specified.
```
files: {
          'scss/_base.scss': 'scss/base/**/*.scss',
       }
```