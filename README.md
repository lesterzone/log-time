## log-time

Command line utility to get content from commits and output content to be used on log time. It **requires** `git` and `nodejs` to be installed on your system.

## Why?

Because I need it. Because I can. Because it may helps you.

## Install

```
npm install -g log-time
```

## About commits

Based on [this](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) post and many other resources out there, commit message should be very important for you.
For me, I just need to provide a date to a command line utility and get content to be pasted and log time on my ticket.

That's all about this package.

Commit example:

```
commit HASH_HERE
Author: AUTHOR_HERE
Date:   DATE_HERE

    FIRST_LINE
    SECOND_LINE
    ...
```

What do I need?

```
HASH FIRST_LINE | HASH FIRST_LINE
```

so:

```
log-time
```

## Ussage

```
log-time # output commits from today
```

```
log-time 'Jan 24 2016' # commits from given date
```