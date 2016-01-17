# iaweb_styleguide

## Needs to be installed

In order for this project to work properly a little bit of software has to be installed and set up.
Within this section step by step instructions will be given in order to get the project running.

Ruby is a dynamic and free programming language. It is needed within this project in order to run Jekyll.
### Ruby 2.3
Install the fitting Version of Ruby depending on the operating system. Official Webpage](https://www.ruby-lang.org/en/downloads/)

### Bundler 1.11.0
This isa little helper tool that will be installed in order to make sure that everyone participating in the project is using the same versions of each package.  [Documentation](http://bundler.io/)
```
gem install bundler
```

With the help of the following command every piece of the bundle is going to be installed automatically.

```
bundle install
```
### NodeJS 4.2.1
NodeJS is a javascript runtime. It uses a non blockiing I/O modell and is event-driven. [Official Webpage](https://nodejs.org/en/download/)

### Npm
NodeJS also comes with javascripts package manager npm which is needed in order to install all packages used based on javascript. [Official Webpage](https://www.npmjs.com/)

### Jekyll 3.0.11
Jekyll is a static site generator which compiles our plain text and transforms it into a nice static html webpage. [Official Webpage](https://jekyllrb.com/)



## setup in the package.json

### "grunt": "^0.4.5",
Grunt is a task runner based on JavaScript. With this tool it is possible to simply set up tasks which will be executed consecutively. [Official Webpage](http://gruntjs.com/)

### "grunt-browser-sync": "^2.2.0"
We are not using the build in serve function provided by Jekyll in order to generate the development server.
For this task we use browser sync which provides a lot more functionality like automatically refreshing the browser tab and synchronising input to other browsers. [GitHub](https://github.com/BrowserSync/grunt-browser-sync)
 (there will be errors of an optional dependency on windows machines, it still works though)

### "grunt-concurrent": "^2.1.0"
With concurrent it is possible to run two tasks concurrently. [GitHub](https://github.com/sindresorhus/grunt-concurrent)

### "grunt-contrib-watch": "^0.6.1"
Contrib watch is keeping a close look at our files and runs predefined tasks whenever one of the files is being edited.
This makes it possible to establish a nice workflow since we don't have to manually restart the server at any time. [GitHub](https://github.com/gruntjs/grunt-contrib-watch)

### "grunt-gulp": "^0.1.0"
Gulp is another task runner. We needed to include gulp into grunt since SC5 only supports gulp tasks.
[Official Gulp Webpage](http://gulpjs.com/) [Grunt-Gulp GitHub](https://github.com/gratimax/gulp-grunt)

### "grunt-jekyll": "^0.4.3"
The jekyll module gives us the possibility to compile the jekyll based site with a simple grunt task. [GitHub](https://github.com/dannygarcia/grunt-jekyll)

### "grunt-sass": "^1.1.0"
Grunt sass converts the edited sass files into css files. [GitHub](https://github.com/sindresorhus/grunt-sass)

### "grunt-sass-lint": "0.1.0-beta.4"
Sass Lint is needed in order to make sure sass file is written correctly. [GitHub](https://github.com/sasstools/grunt-sass-lint)

### "load-grunt-tasks": "^3.3.0"
This makes it possible to load multiple grunt tasks by using globbing patterns. [GitHub](https://github.com/sindresorhus/load-grunt-tasks	)

### "sc5-styleguide": "^0.3.41"
SC5 is responsible for extracting the comments from the sass files and converting them into a nice and clean styleguide. [GitHub](https://github.com/SC5/sc5-styleguide) [Official Webpage](http://styleguide.sc5.io/	)

### "grunt-sass-globbing": "^1.4.0"
This tool provides us with the functionality of merging all the sass files into a single one. [GitHub](https://github.comonalli/DennisBecker/grunt-sass-globbing)



# Other things that need to be done
If more than one operating system is going to be used there is the neccessity to add a .gitattributes files because else git will mess with your line endings and the scss linter will not work correctly anymore.
In order to fix it create a file with the name ".gitattribues" within the main git/project folder with the following content:
```
# Declare files that will always have CRLF line endings on checkout.
*.scss eol=lf

# Denote all files that are truly binary and should not be modified.
*.png binary
*.jpg binary
```


#Gruntfile.js
Within this file all the task which are executed with grunt are being initialized and set up.