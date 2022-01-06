const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [ 

  {
    type: 'input',
    name: 'title',
    message: "What is the title of the project?",
    validate: function(answer) {
      if(answer.length < 1) {
        return console.log('You must enter in a project title.')
      }
      return true;
    }
  },

  {
    type: 'input',
    name: 'githubURL',
    message: "What is the URL of the Github repository?",
    validate: function(answer) {
      if(answer.length < 1) {
        return console.log('You must enter in a repository URL.')
      }
      return true;
    }
  },

  {
    type: 'input',
    name: 'projectDescr',
    message: "What is the description of the project?",
    validate: function(answer) {
      if(answer.length < 1) {
        return console.log('You must enter a project description.')
      }
      return true;
    }
  },

  {
    type: 'input',
    name: 'credits',
    message: "Credits:",
    validate: function(answer) {
      if(answer.length < 1) {
        return console.log('credits')
      }
      return true;
    }
  },


  // https://choosealicense.com/licenses/   This is where the list comes from.
  {
    type: 'list',
    name: 'license',
    message: "Choose a license for your project:",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License-2.0', 'Apache License-2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'none']
    }
];


inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    let markdown = generateMarkdown(answers);
    fs.writeFileSync("new-README.md", markdown);

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
