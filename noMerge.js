/**
 * Return true if commit comes from author, used to filter 'Merge' commits
 */

'use strict';

/**
 * @param `commit` is an array split by '\n' from commit message
 */
module.exports = function noMerge(commit) {
    return commit[1].indexOf('Author') === 0;
};