const inquirer = require("inquirer");
const fs = require("fs");
const { rejects } = require("assert");
const { resolve } = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "What is the name of your project?",
  "Write a description of your project.",
  "Provide Installation instructions for your project.",
  "Provide instructions on how to use your project.",
  "Will you allow contributions(y/n)?",
  "Provide contributor guidelines",
  "Provide test data/instructions to allow user to test your project.",
  "Which license would you like to add?",
  "What is your GitHub username?",
  "Provide a link to your project.",
  "Please provide an email address.",
];

const promptUser = (UserInput) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "projectName",
        message: questions[0],
        validate: (projectNameInput) => {
          if (projectNameInput) {
            return true;
          } else {
            console.log("Please enter name of your project.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: questions[1],
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please enter a description of your project.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "install",
        message: questions[2],
        validate: (installInput) => {
          if (installInput) {
            return true;
          } else {
            console.log("Please enter installation instructions.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "usage",
        message: questions[3],
        validate: (inputUsage) => {
          if (inputUsage) {
            return true;
          } else {
            console.log("Please enter Usage information.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "contribution",
        message: questions[5],
        validate: (contributionInput) => {
          if (contributionInput) {
            return true;
          } else {
            console.log("Please add guidelines for contribution.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "test",
        message: questions[6],
        validate: (testInput) => {
          if (testInput) {
            return true;
          } else {
            console.log("Please provide a way for user to test your program");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "license",
        message: questions[7],
        choices: ["MIT", "GNU GPLv3"],
      },
      {
        type: "input",
        name: "github",
        message: questions[8],
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please provide your github username.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "link",
        message: questions[9],
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("Please provide a link to your project.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: questions[10],
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please provide your email.");
            return false;
          }
        },
      },
    ])
    .then((userInput) => userInput);
};

// TODO: Create a function to write README file
const writeToFile = (data) => {
  return new Promise((resolve, rejects) => {
    fs.writeFile("./dist/README.md", data, (err) => {
      if (err) {
        rejects(err);
        return;
      }
      resolve({
        ok: true,
        message: "File Created!",
      });
    });
  });
};

// TODO: Create a function to initialize app
function init(userInput) {
  promptUser(userInput)
    .then((userInput) => {
      return generateMarkdown(userInput);
    })
    .then((userInput) => {
      return writeToFile(userInput);
    });
}

// Function call to initialize app
init();
