# UX Day Graz Styleguide
This document descripes how to install and use the tools needed to generate the styleguide.
## Index
- [Quickguide](#quickguide)
- [Step by Step](#step-by-step-guide-with-explanation)
- [Packages installed](#setup-in-the-package.json)
- [Other things that need to be done](#things-that-need-to-be-considered)
- [Optional changes](#optional-changes)
- [Grunt Tasks](#grunt-tasks)

## Quickguide
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

## Step by Step Guide with explanation

In order for this project to work properly a little bit of software has to be installed and set up.
Within this section step by step instructions will be given in order to get the project running.

### Ruby 2.3
Ruby is a dynamic and free programming language. It is needed within this project in order to run Jekyll.
It could also be used to compile the Sass, but in this project libSass has been used. 
So Jekyll is the only thing that has a requirement to ruby.
Install the correct Version of Ruby depending on the operating system. [Official Download Webpage](https://www.ruby-lang.org/en/downloads/)

### Bundler 1.11.0
This is a dependency manager that will be used to make sure that everyone participating in the project is using the same version of each ruby gem. [Documentation](http://bundler.io/)
Install the current version by typing this into your console. The current working path of the shell does not matter since bundler is going to be installed globally.
```
gem install bundler
```
With the help of the following command all dependencies of the projects bundle is going to be installed automatically. Each project has it's own bundle that is defined within the 'Gemfile' file. In this case only Jekyll is included.
```
bundle install
```

### NodeJS 4.2.1
NodeJS is a javascript runtime. It uses a non blockiing I/O modell and is event-driven. This also needs to installed globally.

[Official Download Webpage](https://nodejs.org/en/download/)

### Npm
NodeJS comes with javascripts package manager npm which is needed in order to install all dependencies used based on javascript.

[Official Webpage](https://www.npmjs.com/)

### Jekyll 3.0.11
Jekyll is a static site generator which compiles the plain text and transforms it into a nice static html webpage.

[Official Webpage](https://jekyllrb.com/)



## Setup in the package.json
The package.json contains a description of all JavaScript dependencies needed for this project. They don't need to be installed manually, this is done by running __npm install__.

### "grunt": "^0.4.5",
Grunt is a task runner based on JavaScript. With this tool it is possible to set up tasks which will be executed consecutively.

[Official Webpage](http://gruntjs.com/)

### "grunt-browser-sync": "^2.2.0"
The built-in serve function provided by Jekyll is not used by default in this project in order to run the development server.
For this task browser sync is used. It provides a lot more functionality like automatically refreshing the browser tab and synchronising input from multiple browsers.
(On installation there might be errors of an optional dependency on windows machines. They can be ignored, it does work without.)
 
[GitHub](https://github.com/BrowserSync/grunt-browser-sync)


### "grunt-concurrent": "^2.1.0"
With concurrent it is possible to run multiple grunt tasks concurrently.

[GitHub](https://github.com/sindresorhus/grunt-concurrent)

### "grunt-contrib-watch": "^0.6.1"
Contrib watch is keeping a close look at the projects files and runs predefined tasks whenever one of the files changes.
This makes it possible to establish a workflow and removes the necessity to manually run tasks or reload the browser at any time.

[GitHub](https://github.com/gruntjs/grunt-contrib-watch)

### "grunt-gulp": "^0.1.0"
Gulp is another task runner. It is needed to generate the SC5 styleguide. SC5 only provides gulp tasks. This package allows to run gulp tasks as grunt tasks.

[GitHub](https://github.com/gratimax/gulp-grunt)

[Official Gulp Webpage](http://gulpjs.com/) 

### "grunt-jekyll": "^0.4.3"
The jekyll module provides the possibility to compile the jekyll based site with a grunt task.

[GitHub](https://github.com/dannygarcia/grunt-jekyll)

### "grunt-sass": "^1.1.0"
Grunt sass compiles the sass to css using libSass.

[GitHub](https://github.com/sindresorhus/grunt-sass)

### "grunt-sass-lint": "0.1.0-beta.4"
Sass Lint is a static code analyzer. It is used to improve the quality of the Scss and makes sure the sass files follow some coding styles.

[GitHub](https://github.com/sasstools/grunt-sass-lint)

### "load-grunt-tasks": "^3.3.0"
This makes it possible to load multiple grunt tasks by using globbing patterns.
It could replace all __grunt.loadNpmTasks('xxx');__ with __require('load-grunt-tasks')(grunt);__
It has not been used in this project to keep a better overview of the loaded grunt tasks.

[GitHub](https://github.com/sindresorhus/load-grunt-tasks	)

### "sc5-styleguide": "^0.3.41"
SC5 is responsible for extracting the comments from the sass files and converting them into a nice and clean styleguide.

[GitHub](https://github.com/SC5/sc5-styleguide)

[Official Webpage](http://styleguide.sc5.io/)

### "grunt-sass-globbing": "^1.4.0"
This tool provides the functionality of merging multiple sass files from a folder into a single one.
So when a file is added to a folder it doesn't need to be included in the project manually.

[GitHub](https://github.comonalli/DennisBecker/grunt-sass-globbing)



## Things that need to be considered
If more than one operating system is going to be used there is the necessity to add a .gitattributes files declaring line endings.
Otherwise git messes with line endings and the scss linter will not work correctly.
In order to fix it a .gitattributes file within the root folder of the git is created. It has the following content:
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
This improves reusability of the css components.
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
With the formatter:stylish option the output of the linter is printed to the console.
Set it to html to create an html file with the report.
Within ignore all the scss files which should be ingored by the linting process are listed.
Indentation specifies the number of spaces used.
Other options include for example nesting depth or name formats.
All possible options can be seen in the [default configuration](https://github.com/sasstools/sass-lint/blob/master/lib/config/sass-lint.yml).

The target location for the linter is specified in the grunt task in the 'Gruntfile.js' file.
To change the destination the value for target needs to be changed accordingly within the sasslint task.

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
Jekylls configuration is done within the _config.yml file. Within this file there isn't much to be changed.
With the 'exclude' option it is possible to add folders which should not be compiled by jekyll.
The two folders scss and node_modules were are added in oder to increase the compiling speed and also because those files are not needed on the live site.

If the styleguide shouldn't be deployed either, a second commented out `exlude line` has been added within this file that can be switched with the current one.
This insures that the styleguide folder isn't complied into the _site folder.

```
# exclude: ['bac', '*/bac', 'scss', 'node_modules', 'styleguide']
exclude: ['bac', '*/bac', 'scss', 'node_modules']
```

### Hosting the site with Jekyll or with browser-sync

With the default setup the webpage is hosted at localhost by running browser sync.
This package has a lot of little features which are pretty handy regarding the workflow, like automatically refreshing the webpage and also giving the option to synchronize multiple browsers running at different devices.

In order to switch to Jekyll's serve functions a few changes need to be made.
All instruction can be found in the 'Gruntfile.js' file within the 'gulp' task.
It is also possible to change the port number to a desired value.
This is an example how it should look like with Jekyll's server hosting enabled.
The Webpage can be located at <http://localhost:2000/>.

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
Also the concurrent task needs to changed. Comment out the 'browserSync' task and uncomment the 'jekyll:serve' task.

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
Within this the 'Gruntfile.js' all the task which are executable with grunt are being initialized and set up.
This section describes all grunt tasks in detail.
A grunt task is run from the console by typing __grunt taskname__ but a default task is implemented so only __grunt__ needs to be typed.
The default task 'sass_globbing', 'sass', 'gulp:styleguide-generate', 'gulp:styleguide-applystyles', 'jekyll:dist', 'concurrent'.
The only task that needs to be run separately is the lint task by typing __grunt sasslint__.


### jekyll
This task compiles the site with Jekyll.
The `bundleExec` option is needed to run Jekyll from the locally installed bundle.
There are two sub-tasks, dist and serve. Dist only compiles the site and serve also starts Jekyll's built-in server.



### sass
Takes all files that ends with '.scss' from the scss directory and compiles them into the css directory.
With the 'cwd' option the current working directory can be changed.
With the 'src' option specific files can be chosen.
To change the destination of the generated file the 'dest' option needs to be changed.
With 'the 'ext' option the extension of the compiled file is specified.
Note that files starting with underscore are ignored, they are sass partials and are supposed to be included from other sass files.
So in this project only the style.scss is compiled, it imports all other partial files. 

### watch
This watches all the folders within the directory for changes.
The wanted files can be defined with the 'files' option. We are watching all folders except for the ones defined with a callsign.
With the 'tasks' option it is possible to define the tasks that should be run after a change is detected.


### concurrent
Currently the only tasks which are running at the same time are the 'watch' and the 'browserSync' tasks. Those tasks can be specified with the 'serve' option.

### sasslint
Within this task the location of the configuration file is specified with the 'configFile' option and the scss files which should be linted are specified with the 'target' option.

### browser-sync
With the 'src' option the css files which are going to be injected automatically on change are defined.
Also the base directory for the final webpage is specified with the 'baseDir' option

### gulp
With this task the style guide is being generated.
With the 'title' option the name that can be seen in the tab of a browser can be changed.
With the variable 'outputPath' the name of the folder that will be created within the root folder can be changed.
For instruction on changing the server hosting please refer to the section [Hosting the site with Jekyll or with browser-sync](#hosting-the-site-with-jekyll-or-with-browser-sync) in this documentation.

### sass_globbing

This ask handles the the migration of the different scss files into a single one.
The first part of the 'files' option defines the name of the finished scss file.
With the second part of the option the files that should be merged are specified.
```
files: {
          'scss/_base.scss': 'scss/base/**/*.scss',
```