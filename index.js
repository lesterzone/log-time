#!/usr/bin/env node

/**
 * Why?
 *     Because I need it. I need the ability to type:
 *     `log-time-from-git 'Jan 30 2016'` pipe result to my clipboard and paste
 *     content to my ticket.
 * What does this package do?
 *     Retrieve hash and first line from commits for a given date, join content
 *     using ` | ` and printing content to the console. Default date is today
 *
 * stackoverflow
 *     git log http://goo.gl/dBTbmP
 *     commits per day: http://goo.gl/qE2jMr
 *     valid date http://goo.gl/zVykL7
 */

'use strict';

var exec = require('child_process').exec;
var date = new Date(process.argv[2] || new Date().getTime());
var merge = require('./noMerge');
var split = require('./split');
var filter = require('./filter');
var map = require('./map');

if (isNaN(date.getTime())) {
    console.log('Valid date is required, like: Jul 16 2015');
    return process.exit(1);
}

var stringDate = date.toString().split(' ');
var initialDate = [stringDate[1], stringDate[2], stringDate[3]].join(' ');
var before = ' --before "' + initialDate + ' 23:59"';
var after = ' --after "' + initialDate + ' 00:00"';
var command = 'git log --abbrev-commit ' + after + before;
var opt = 'commit ';

exec(command, function(error, out, stderr) {

    if (stderr) {
        console.log(stderr);
        return process.exit(1);
    }

    /**
     * Split commit messages by 'commit ' word
     * Return only commit with message, skip first object which is empty
     * Return an array of fields per commit
     * Return only non Merge commits
     * Return commit hash plus first line of the commit
     */
    var log = out.split(opt).filter(filter).map(split).filter(merge).map(map);

    console.log(log.length ? log.join(' | ') : 'No commits for given date');
});