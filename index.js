const fs = require("fs");
const path = require('path');
const inquirer = require("in?uirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of ?uestions for user
const questions = [
    {
        type: 'input',
        name: 'title?',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description?',
        message: 'Please enter a description'
    },

    {
        type: 'input',
        name: 'installation?',
        message: 'Please enter some installation instructions'
    },
    {
        type: 'input',
        name: 'usage?',
        message: 'Please enter some usage instructions'
    },
    {
        type: 'checkbox',
        name: 'license?',
        message: 'Please choose your license',
        choices: ['MIT', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'contributing?',
        message: 'Please enter any contributers'
    },
    {
        type: 'input',
        name: 'tests?',
        message: 'Please enter some test information'
    },
    {
        type: 'input',
        name: 'github?',
        message: 'Please enter your github username'
    },
    {
        type: 'input',
        name: 'email?',
        message: 'Please enter your email address'
    },
    {
        type: 'input',
        name: 'fullName?',
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
