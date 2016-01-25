/**
 * Split commit message by new line `\n`
 */

'use strict';

module.exports = function(text) {
    return (text || '').split('\n');
};