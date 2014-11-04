/*global describe,it*/
'use strict';
var assert = require('assert'),
  nodeTravisLint = require('../lib/node-travis-lint.js');

describe('node-travis-lint node module.', function() {
  it('must be awesome', function() {
    assert( nodeTravisLint.awesome(), 'awesome');
  });
});
