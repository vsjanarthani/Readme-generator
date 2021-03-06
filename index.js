const inquirer = require('inquirer');
const generateMD = require('./src/markdown-template');
const writeFile = require('./utils/generate-md');

// Getting user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'author',
        message: "What is the author's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter author's name!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: "Please enter author's GitHub username (Required)",
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter author's GitHub username!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "Please enter author's email address!(Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter author's email address!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('You need to enter a project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you use to build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'installations',
        message: 'Enter the Command for Installation'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What should the user know about using this repo or code?'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['MIT', 'ISC', 'IBM Public License Version 1.0', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache 2.0', 'Boost Software License 1.0', 'The Unlicense', 'none']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What should the user know about contributions to the repo or code?'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter the Command to run tests'
      }
    ]);
  };

  promptUser()
  .then(readmeInput => {
    return generateMD(readmeInput);
  })
  .then(documentMD => {
    return writeFile(documentMD);
  })
  .catch(err => {
    console.log(err);
  });