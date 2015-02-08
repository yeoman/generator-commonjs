/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('commonjs generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        done(err);
        return;
      }

      this.app = helpers.createGenerator('commonjs:app', [
        '../../app'
      ]);
      this.app.options['skip-install'] = true;
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      '.jshintrc',
      '.editorconfig',
      'package.json'
    ];

    helpers.mockPrompt(this.app, {
      'name': 'mymodule',
      'description': 'awesome module',
      'version': '1.0.0',
      'repository': 'http://github.com',
      'bugs': 'http://jira.com',
      'license': 'MIT',
      'github_username': 'octocat',
      'author_name': 'Octo Cat',
      'author_email': 'octo@example.com',
      'author_url': 'example.com',
      'node_version': '0.10.6',
      'npm_test': 'grunt nodeunit'
    });

    this.app.run(function () {
      helpers.assertFile(expected);
      helpers.assertFileContent('package.json', /"name": "mymodule"/);
      done();
    });
  });
});
