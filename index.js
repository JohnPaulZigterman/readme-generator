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
            type: 'list',
            message: 'Please select a license.',
            choices: ['MIT', 'EPL 1.0', 'Hippocratic 3.0', 'Artistic 2.0', 'Unlicense'],
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
![License: ${response.license}](https://img.shields.io/badge/License-${response.license.toLowerCase().split(" ").join("_")}-green.svg)

## Table of Contents

1. [Description](#description)
2. [Usage](#usage)
3. [Installation](#installation)
4. [Contributing](#contributing)
5. [Testing](#testing)
6. [License](#license)
7. [Questions](#questions)

## Description

${response.description}

## Usage

${response.usage}

## Installation

${response.installation}

## Contributing

${response.contributions}

## Testing

${response.testing}

## License

This project is licensed under the ${response.license} license.

## Questions

You can find my GitHub profile at https://github.com/${response.github}

You may also reach me with additional questions at ${response.email}
        `, (err) =>
            err ? console.error(err) : console.log('success!')
        )
    );