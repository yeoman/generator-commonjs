'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var CommonJSGenerator = module.exports = function CommonJSGenerator(args, options) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(CommonJSGenerator, yeoman.generators.NamedBase);


CommonJSGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // welcome message
  var welcome =
  '\n     _-----_' +
  '\n    |       |' +
  '\n    |' + '--(o)--'.red + '|   .--------------------------.' +
  '\n   `---------´  |    ' + 'Welcome to Yeoman,'.yellow.bold + '    |' +
  '\n    ' + '( '.yellow + '_' + '´U`'.yellow + '_' + ' )'.yellow + '   |   ' + 'ladies and gentlemen!'.yellow.bold + '  |' +
  '\n    /___A___\\   \'__________________________\'' +
  '\n     |  ~  |'.yellow +
  '\n   __' + '\'.___.\''.yellow + '__' +
  '\n ´   ' + '`  |'.red + '° ' + '´ Y'.red + ' `\n' +
  '\n';

  console.log(welcome);

  var prompts = [{
    name: 'name',
    message: 'Module Name'
  }, {
    name: 'description',
    message: 'Description',
    default: 'The best commonjs module ever.'
  }, {
    name: 'homepage',
    message: 'Homepage'
  }, {
    name: 'license',
    message: 'License',
    default: 'MIT'
  }, {
    name: 'githubUsername',
    message: 'GitHub username'
  }, {
    name: 'authorName',
    message: 'Author\'s Name'
  }, {
    name: 'authorEmail',
    message: 'Author\'s Email'
  }, {
    name: 'authorUrl',
    message: 'Author\'s Homepage'
  }];

  this.currentYear = (new Date()).getFullYear();

  this.prompt(prompts, function (props) {
    this.slugname = this._.slugify(props.name);

    this.repoUrl = 'https://github.com/' + props.githubUsername + '/' + this.slugname;

    if (!props.homepage) {
      props.homepage = this.repoUrl;
    }

    this.props = props;

    cb();
  }.bind(this));
};

CommonJSGenerator.prototype.src = function app() {
  this.mkdir('src');
  this.copy('src/jshintrc', 'src/.jshintrc');
  this.template('src/name.js', 'src/' + this.slugname + '.js');
};

CommonJSGenerator.prototype.test = function app() {
  this.mkdir('test');
  this.template('test/name_test.js', 'test/' + this.slugname + '_test.js');
};

CommonJSGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('gitignore', '.gitignore');

  this.template('README.md');
  this.template('Gruntfile.js');
  this.template('_package.json', 'package.json');
  this.copy('CONTRIBUTING.md', 'CONTRIBUTING.md');
};
