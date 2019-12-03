const figlet = require('figlet');
const boxen = require('boxen');
const chalk = require('chalk');


figlet('SJH  LZY LOVE YOU', function(err, data) {
    if (err) {
        console.dir(err);
        return
    }
    const result = boxen(data, {padding: 1, margin: 1, borderStyle: 'double'});
    console.log(chalk.bold.rgb(255, 0, 102)(result))
});
