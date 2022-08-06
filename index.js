const inquirer = require("inquirer");
const fs = require("fs");
const { rejects } = require("assert");
const { resolve } = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  "What is the name of your project?",
  "Write a description of your project.",
  "Provide Installation instructions for your project.",
  "Provide instructions on how to use your project.",
  "Will you allow contributions(y/n)?",
  "Provide contributor guidelines",
  "Provide test data/instructions to allow user to test your project.",
  "Would you like to add a License?",
  "Which license would you like to add?",
  "What is your GitHub username?",
  "What is the link to your GitHub profile?",
  "Please provide an email address.",
];

const promptUser = (UserInput) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "projectName",
        message: questions[0],
      },
      {
        type: "input",
        name: "description",
        message: questions[1],
      },
      {
        type: "input",
        name: "install",
        message: questions[2],
      },
      {
        type: "input",
        name: "usage",
        message: questions[3],
      },
      // {
      //   type: "confirm",
      //   name: "confirmContributor",
      //   message: questions[4],
      //   default: true,
      // },
      {
        type: "input",
        name: "contributor",
        message: questions[5],
      },
      {
        type: "input",
        name: "test",
        message: questions[6],
      },
      {
        type: "input",
        name: "license",
        message: questions[7],
      },
      {
        type: "input",
        name: "github",
        message: questions[8],
      },
      {
        type: "input",
        name: "gitLink",
        message: questions[9],
      },
      {
        type: "input",
        name: "email",
        message: questions[10],
      },
    ])
    .then((userInput) => userInput);
};

// TODO: Create a function to write README file
const writeToFile = (data) => {
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
