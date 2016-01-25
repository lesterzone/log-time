/**
 * Tests
 */

'use strict';

var assert = require('assert');
var noMerge = require('./noMerge');
var split = require('./split');
var filter = require('./filter');
var map = require('./map');

console.log('Should return false when no Author field is provided');
assert.equal(noMerge(['123', '']), false, 'empty array message');

console.log('Should return true if Author content is present');
assert.equal(noMerge(['123', 'Author: foo']), true, 'Author property');

console.log('Should return proper length when split empty message');
assert.equal(split('').length, 1, 'Empty array');

console.log('Should return proper length when split valid message');
assert.equal(split('foo\n bar\n').length, 3, 'Proper commit message');

console.log('Should return false if no message provided');
assert.equal(filter(), false, 'Should return false if no message provided');

console.log('Should return true if message provided');
assert.equal(filter('foo'), true, 'Should return true if message provided');

console.log('Should return proper values from specified commit array');
var commit = ['123', 'Author: ', '', '', '  test' ];
assert.equal(map(commit), '123 test', 'Should return proper message');