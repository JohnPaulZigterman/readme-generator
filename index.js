const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please describe your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please provide installation instructions.',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'Please provide contribution guidelines.',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'Please provide testing instructions.',
            name: 'testing',
        },
    ])
    .then((response) =>
        fs.writeFile(response.title.toLowerCase().split(" ").join("") + ".md", `
        
        `, (err) =>
            err ? console.error(err) : console.log('success!')
        )
    );