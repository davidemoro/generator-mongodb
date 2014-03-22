'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var shell = require('shelljs');


var MongodbGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Mongodb generator.'));

    var prompts = [{
      name: 'mongodbVersion',
      message: 'Choose the mongodb version (eg: 2.4.9)'
    }];

    this.prompt(prompts, function (props) {
      this.mongodbVersion = props.mongodbVersion;

      done();
    }.bind(this));
  },

  app: function () {
    var done = this.async();
    shell.echo("CIAOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
    shell.exec('virtualenv --no-site-packages .', {async: true}, function (code, output) {
      shell.exec('./bin/python bootstrap.py', {async: true}, function (code, output) {
        shell.exec('./bin/buildout', {async: true});
        done();
      });
    });
    this.mkdir('app');
    this.mkdir('app/templates');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('bootstrap.py', 'bootstrap.py');
    this.copy('buildout.cfg', 'buildout.cfg');
  }
});

module.exports = MongodbGenerator;
