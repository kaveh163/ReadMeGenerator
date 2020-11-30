const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    'Enter your title', 'Enter your description', 'Enter your installation instructions', 'Enter your usage information', 'Enter your contribution guidelines', 'Enter your test instructions', 'choose your license', 'Enter your Github username', 'Enter your email address'
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        if(err) {
            console.log(err);
        } else {
            console.log('Successfully writen to file');
        }
    })
}

// function to initialize program
function init() {
    const getData = async function () {
        const answers = await inquirer.prompt([
            {
                name: 'title',
                type: 'input',
                message: questions[0]
            },
            {
                name: 'description',
                type: 'input',
                message: questions[1]
            },
            {
                name: 'installation',
                type: 'input',
                message: questions[2]
            },
            {
                name: 'usage',
                type: 'input',
                message: questions[3]
            },
            {
                name: 'contribution',
                type: 'input',
                message: questions[4]
            },
            {
                name: 'test',
                type: 'input',
                message: questions[5]
            },
            {
                name: 'license',
                type: 'list',
                message: questions[6],
                choices: ['MIT', 'ISC', 'Apache']
            },
            {
                name: 'userName',
                type: 'input',
                message: questions[7]
            },
            {
                name: 'email',
                type: 'input',
                message: questions[8]
            }
        ])
        if (answers.license === 'Apache') {
            answers.license = 'Apache%202.0';
        }
        console.log(answers);
        const markDown = generateMarkdown(answers);
        writeToFile('README.md', markDown);
    }
    getData();

}

// function call to initialize program
init();