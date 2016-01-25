/**
 * Return specified values from array
 */
'use strict';

module.exports = function(commit) {
    return commit[0] + ' ' + commit[4].trim();
};