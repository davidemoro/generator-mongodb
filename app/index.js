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
    this.mkdir('app');
    this.mkdir('app/templates');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('bootstrap.py', 'bootstrap.py');
    this.template('buildout.cfg', 'buildout.cfg');
  },

  projectfiles: function () {
    var async = require('async');
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    async.series([function (callback) {
                   shell.exec('virtualenv --no-site-packages --no-setuptools .', {async: true}, function (code, output) {
                     callback();
                   });
                 }, 
                 function (callback) {
                   shell.exec('./bin/python bootstrap.py', {async: true}, function (code, output) {
                     callback();
                   });
                 },
                 function (callback) {
                   shell.exec('./bin/buildout', {async: true}, function (code, output) {
                     callback();
                   });
                 }
                 ]);
  }
});

module.exports = MongodbGenerator;
