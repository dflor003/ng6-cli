var path = require('path');
var chalk = require('chalk');
var Template = require('../../../lib/template');
var Case = require('case');

module.exports = Template.extend({

  init: function() {
    this._super.apply(this, arguments);
    this.description = 'A simple Angular service.'
  }

});