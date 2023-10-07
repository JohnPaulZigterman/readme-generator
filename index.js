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
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please describe how to use that application.',
            name: 'usage',
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
        {
            type: 'input',
            message: 'Please provide installation instructions.',
            name: 'installation',
        },
        {
            type: 'list',
            message: 'Please select a license.',
            choices: ['MIT', 'Open Source'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ])
    .then((response) =>
        fs.writeFile(response.title.toLowerCase().split(" ").join("") + ".md", `
        # ${response.title}

        ## Table of Contents

        1. Project Description
        2. Installation
        3. Contribution Guidelines
        4. Test Instructions

        ## Project Description

        ${response.description}

        ## Installation

        ${response.installation}

        ## Contribution Guidelines

        ${response.contributions}

        ## Test Instructions

        ${response.testing}

        When creating an open source project on
        `, (err) =>
            err ? console.error(err) : console.log('success!')
        )
    );