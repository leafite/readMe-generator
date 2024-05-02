// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Destructure the required functions from generateMarkdown.js
const { renderLicenseSection, renderLicenseBadge, renderLicenseLink } = generateMarkdown;

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Specify the license for your project:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Explain how others can contribute to your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide instructions for running tests:',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Provide contact information for any questions:',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  const readMe = generateMarkdown(data);
  fs.writeFile(fileName, readMe, err => {
    if (err) {
      console.error('Error writing README:', err);
      return;
    }
    console.log(`README file "${fileName}" has been created successfully!`);
  });
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      writeToFile('README.md', answers);
    })
    .catch(error => {
      console.error('Error occurred during initialization:', error);
    });
}

// Function call to initialize app
init();
