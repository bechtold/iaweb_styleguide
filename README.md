# UX Day Graz Styleguide
This document descripes how to install and use the tools needed to generate the styleguide.
## Index
- [Quickguide](#quickguide)
- [Step by Step](#step-by-step-guide-with-explanation)

## Quickguide
##### Global
- [Install Git](https://git-scm.com/downloads) (optional)
- [Install Ruby](https://www.ruby-lang.org/en/downloads/)
- [Install NodeJS](https://nodejs.org/en/download/)
- Install Bundler with ```gem install bundler```
##### Project specific
- Fork Github Project <https://github.com/bechtold/iaweb_styleguide.git> or download zip
- Change into Project/Git Folder
- run ```bundle install```
- run ```npm install```
- run ```grunt```
- open <http://localhost:3000/> in the browser

## Step by Step Guide with explanation

In order for this project to work properly a little bit of software has to be installed and set up.
Within this section step by step instructions will be given in order to get the project running.

### Ruby 2.3
Ruby is a dynamic and free programming language. It is needed within this project in order to run Jekyll.
Install the correct Version of Ruby depending on the operating system. [Official Download Webpage](https://www.ruby-lang.org/en/downloads/)

### Bundler 1.11.0
This is a dependency manager that will be used to make sure that everyone participating in the project is using the same versions of each ruby gem. [Documentation](http://bundler.io/)
Install the current version by typing this into your console. The current working path of the shell does not matter since bundler is going to be installed globally.
```
gem install bundler
```
With the help of the following command all dependencies of a bundle is going to be installed automatically. Each project has it's own bundle that is defined within the 'Gemfile' file. In our case this only includes Jekyll.
```
bundle install
```

### NodeJS 4.2.1
NodeJS is a javascript runtime. It uses a non blockiing I/O modell and is event-driven. This also needs to installed manually.[Official Download Webpage](https://nodejs.org/en/download/)

### Npm
NodeJS comes with javascripts package manager npm which is needed in order to install all packages used based on javascript. [Official Webpage](https://www.npmjs.com/)

### Jekyll 3.0.11
Jekyll is a static site generator which compiles our plain text and transforms it into a nice static html webpage. [Official Webpage](https://jekyllrb.com/)



## Setup in the package.json
The package.json contains a description of all JavaScript dependencies needed for this project. They don't need to be installed manually, this is done by running `npm install`.

### "grunt": "^0.4.5",
Grunt is a task runner based on JavaScript. With this tool it is possible to simply set up tasks which will be executed consecutively. [Official Webpage](http://gruntjs.com/)

### "grunt-browser-sync": "^2.2.0"
We are not using the built-in serve function provided by Jekyll in order to run the development server.
For this task we use browser sync which provides a lot more functionality like automatically refreshing the browser tab and synchronising input from multiple browsers. [GitHub](https://github.com/BrowserSync/grunt-browser-sync)
 (There might be errors of an optional dependency on windows machines. They can be ignored, it does work without.)

### "grunt-concurrent": "^2.1.0"
With concurrent it is possible to run multiple tasks concurrently. [GitHub](https://github.com/sindresorhus/grunt-concurrent)

### "grunt-contrib-watch": "^0.6.1"
Contrib watch is keeping a close look at our files and runs predefined tasks whenever one of the files is being edited.
This makes it possible to establish a nice workflow since we don't have to manually restart the server or reload the browser at any time. [GitHub](https://github.com/gruntjs/grunt-contrib-watch)

### "grunt-gulp": "^0.1.0"
Gulp is another task runner. We need it to include gulp into grunt since SC5 only provides gulp tasks.
[Official Gulp Webpage](http://gulpjs.com/) [Grunt-Gulp GitHub](https://github.com/gratimax/gulp-grunt)

### "grunt-jekyll": "^0.4.3"
The jekyll module gives us the possibility to compile the jekyll based site with a simple grunt task. [GitHub](https://github.com/dannygarcia/grunt-jekyll)

### "grunt-sass": "^1.1.0"
Grunt sass compiles the sass to css. [GitHub](https://github.com/sindresorhus/grunt-sass)

### "grunt-sass-lint": "0.1.0-beta.4"
Sass Lint is a static code analyzer. It is needed to make sure the sass file follow some coding styles. [GitHub](https://github.com/sasstools/grunt-sass-lint)

### "load-grunt-tasks": "^3.3.0"
This makes it possible to load multiple grunt tasks by using globbing patterns. [GitHub](https://github.com/sindresorhus/load-grunt-tasks	)

### "sc5-styleguide": "^0.3.41"
SC5 is responsible for extracting the comments from the sass files and converting them into a nice and clean styleguide. [GitHub](https://github.com/SC5/sc5-styleguide) [Official Webpage](http://styleguide.sc5.io/	)

### "grunt-sass-globbing": "^1.4.0"
This tool provides us with the functionality of merging all the sass files into a single one. [GitHub](https://github.comonalli/DennisBecker/grunt-sass-globbing)



## Other things that need to be done
If more than one operating system is going to be used there is the neccessity to add a .gitattributes files because otherwise git will mess with line endings and the scss linter will not work correctly.
In order to fix it create a file with the name ".gitattribues" within the main git/project folder with the following content:
```
# Declare files that will always have CRLF line endings on checkout.
*.scss eol=lf

# Denote all files that are truly binary and should not be modified.
*.png binary
*.jpg binary
```

# Gruntfile.js
Within this file all the tasks which are executed with grunt are being initialized and set up.

## Changes that can be made

## sass-lint-yml
Within this file all the properties for the linting of the sass file are defined.
For this project we used a pretty simple but also strict config.
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
With the formatter:stylish option we force the output of the linter to be wrapped in html.
Within ignore we list all the scss files which should be ingored by the linting process.
Indentation specifies the number of spaces used.

The target location for the linter is specified within the 'Gruntfile.js' file.
To change the destinatition the value for target needs to be changed accordingly within the sasslint task.

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


##_config.yml
Jekylls configuration is done within the _config.yml file. Within this file there isn't much to be changed.
with the 'exclude' option it is possible to add folder which should not be compiled by jekyll.
The two folders scss and node_modules were added by us in oder to increase the compiling speed and also because those are files which are not needed on the live site.

If the styleguide shouldn't be deployed either there a second exlude line has been added within this file that can be switched with the current one. This insures that the styleguide folder isn't complied into the _site folder.

```
# exclude: ['bac', '*/bac', 'scss', 'node_modules', 'styleguide']
exclude: ['bac', '*/bac', 'scss', 'node_modules']
```

## Hosting the site with Jekyll or with browser-sync

With the default setup the webpage is hosted at localhost with the help of browser sync. This package has a lot of little features which are pretty handy regarding the workflow like automatically refreshing the webpage and also gives the option to synchronice multiple browsers running at different devices.

In order to switch to Jekylls serve functions a few changes need to be made. All instruction can be found in the 'Gruntfile.js' file within the 'gulp' task. It is possible to change the port number to a desired value.
This is an example how it should look like with Jekylls server hosting enabled. The Webpage can be located at <http://localhost:2000/>.

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