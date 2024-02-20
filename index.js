const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'titleQ',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'descriptionQ',
        message: 'Please enter a description'
    },

    {
        type: 'input',
        name: 'installationQ',
        message: 'Please enter some installation instructions'
    },
    {
        type: 'input',
        name: 'usageQ',
        message: 'Please enter some usage instructions'
    },
    {
        type: 'checkbox',
        name: 'licenseQ',
        message: 'Please choose your license',
        choices: ['MIT', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'contributingQ',
        message: 'Please enter any contributers'
    },
    {
        type: 'input',
        name: 'testsQ',
        message: 'Please enter some test information'
    },
    {
        type: 'input',
        name: 'githubQ',
        message: 'Please enter your github username'
    },
    {
        type: 'input',
        name: 'emailQ',
        message: 'Please enter your email address'
    },
    {
        type: 'input',
        name: 'fullNameQ',
        message: 'Please enter your full name'
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
