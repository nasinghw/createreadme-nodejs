const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of ?uestions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give project description'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Please provide user instructions for installation'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose license',
        choices: ['MIT','Apache 2.0', 'Unlicense' ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter all contributers'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test information'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your github account'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address'
    },
    {
        type: 'input',
        name: 'fullName',
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
    function init() {
        inquirer
        .prompt(questions)
        .then((answers) => {
            const { title, description, installation, usageQ, license, contributing, test, github, email, fullName } = answers
            let licenseBadge;
            let licenseContent;
            switch (licenseQ[0]) {
                case "MIT":
                    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
                    licenseContent = `
                    MIT License

                    Copyright (c) 2024 ${fullNameQ}
                    
                    Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the "Software"), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:
                    
                    The above copyright notice and this permission notice shall be included in all
                    copies or substantial portions of the Software.
                    
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.`
                break;

                

}}};

// function call to initialize program
init();
