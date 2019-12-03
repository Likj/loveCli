const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');



const prompt = inquirer.createPromptModule()



const questions = [
    {
        type: 'list',
        name: 'ready',
        message: '你准备好啦吗',
        choices: [
            {
                name: '准备好啦',
                value: 'Y'
            },
        ],
        validate(value) {
            console.log(value)
            if (value === 'N') {
                return '再给你一次更改的机会'
            }
            return true
        },
    },
    {
        type: 'input',
        name: 'name',
        message: '请用中文写下你喜欢的人',
        validate(value) {
            if (value !== '李科举') {
                return '再给你一次机会，请输入正确的名字!'
            }
            return true
        },
    },
    {
        type: 'rawlist',
        name: 'result',
        message: '请选择喜欢的类型',
        choices: [
            {
                name: '很喜欢',
                value: 'LIKE'
            },
            {
                name: '很爱',
                value: 'LOVE'
            },
        ],
    },
];

function delay(timeout) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout * 1000)
    })
}

module.exports = function() {
    prompt(questions)
        .then(answer => {
            const spinner = 
                ora({
                    text: '正在根据回答生成结果',
                })
                .start();

            const { result } = answer;
            
            const actionMap = {
                LOVE: function() {
                    const love = require('../utils/printLove.js');
                    love();
                },
                LIKE: function() {
                    const like = require('../utils/printLike.js');
                    like();
                },
            };
            const action = actionMap[result];
            delay(2).then(() => {
                spinner.succeed('结果出来啦啊');
                action();
            });
            
        })
}


