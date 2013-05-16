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
    name: 'name'  
  }, {
    name: 'description',
    'default': 'The best commonjs module ever.'
  }, {
    name: 'version'
  }, {
    name: 'repository'
  }, {
    name: 'bugs'
  }, {
    name: 'license',
    'default': 'MIT'
  }, {
    name: 'author_name'
  }, {
    name: 'author_email'
  }, {
    name: 'author_url'
  }, {
    name: 'main'
  }, {
    name: 'npm_test',
    'default': 'grunt nodeunit'
  },];

  var nameToMessage = function (name) {
    return name.split('_').map(
      function (x) { return this._.capitalize(x); }.bind(this)
    ).join(' ') + ':';
  }.bind(this);

  // Generate prompt messages if only the name is defined.
  prompts.map(function (entry) {
    if (entry.message === undefined) {
      entry.message = nameToMessage(entry.name);
    }
    return entry;
  }.bind(this));

  this.currentYear = (new Date()).getFullYear();

  this.prompt(prompts, function (err, props) {
    if (err) {
      return this.emit('error', err);
    }

    this.props = props;
    // For easier access in the templates.
    this.slugname = this._.slugify(props.name);
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
  this.copy('test/jshintrc', 'test/.jshintrc');
  this.template('test/name_test.js', 'test/' + this.slugname + '_test.js');
};

CommonJSGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('gitignore', '.gitignore');
  this.copy('travis.yml', '.travis.yml');

  this.template('README.md');
  this.template('Gruntfile.js');
  this.template('_bower.json', 'bower.json');
  this.template('_package.json', 'package.json');
  this.template('bowerrc', '.bowerrc');
  this.copy('CONTRIBUTING.md', 'CONTRIBUTING.md');
};
