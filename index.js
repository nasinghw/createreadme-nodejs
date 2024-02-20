const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of ?uestions for user
const questions = [
    {
        type: 'input',
        name: 'title?',
        message: 'What is title of your project?'
    },
    {
        type: 'input',
        name: 'description?',
        message: 'Please give project description'
    },

    {
        type: 'input',
        name: 'installation?',
        message: 'Please provide user instructions for installation'
    },
    {
        type: 'input',
        name: 'usage?',
        message: 'Please provide usage instructions'
    },
    {
        type: 'checkbox',
        name: 'license?',
        message: 'Choose license',
        choices: ['MIT','Apache 2.0', 'Unlicense' ]
    },
    {
        type: 'input',
        name: 'contributing?',
        message: 'Please enter all contributers'
    },
    {
        type: 'input',
        name: 'tests?',
        message: 'Please provide test information'
    },
    {
        type: 'input',
        name: 'github?',
        message: 'Please provide your github account'
    },
    {
        type: 'input',
        name: 'email?',
        message: 'Please provide your email address'
    },
    {
        type: 'input',
        name: 'fullName?',
        message: 'Finally your full name'
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!'))
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
