'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  welcome: function () {
    this.log(this.yeoman);
  },

  prompting: function () {
    var cb = this.async();

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
      this.camelname = this._.camelize(props.name);

      this.repoUrl = 'https://github.com/' + props.githubUsername + '/' + this.slugname;

      if (!props.homepage) {
        props.homepage = this.repoUrl;
      }

      this.props = props;

      cb();
    }.bind(this));
  },

  source: function () {
    this.mkdir('src');
    this.copy('src/jshintrc', 'src/.jshintrc');
    this.template('src/name.js', 'src/' + this.slugname + '.js');
  },

  test: function () {
    this.mkdir('test');
    this.template('test/name_test.js', 'test/' + this.slugname + '_test.js');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
    this.template('readme.md');
    this.template('Gruntfile.js');
    this.template('_package.json', 'package.json');
    this.copy('contributing.md', 'contributing.md');
  },

  install: function () {
    this.installDependencies({
      bower: false,
      skipInstall: this.options['skip-install']
    });
  }
});
