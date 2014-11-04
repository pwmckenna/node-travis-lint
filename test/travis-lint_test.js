/*global describe,it*/
'use strict';
var assert = require('assert');
var lint = require('../lib/travis-lint.js');

describe('travis-lint node module.', function() {
  it('must be a function', function() {
    assert(typeof lint === 'function');
  });
});
