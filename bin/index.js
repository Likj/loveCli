#!/usr/bin/env node
const commander = require('commander');
const chalk = require('chalk');
const loveAction = require('../src/index.js');


commander.version('v0.0.1');

commander
    .command('love')
    .description('start love travel')
    .action(loveAction);

commander.parse(process.argv);


if (!process.argv.slice(2).length || process.argv.slice(2) !== 'love') {
    commander.help();
}
