const { rejects } = require("assert");
const fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  const {
    projectName,
    description,
    install,
    usage,
    contribution,
    test,
    license,
    ...questions
  } = userInput;
  console.log(questions);

  return `# ${projectName} ${renderLicenseBadge(license)}
 

  ## Table of Contents
    [Description](#Description)
    [Installation](#Installation)
    [Usage](#Usage)
    [Contribution](#Contribution)
    [Tests](#Tests)
    [License](#License)

  ## Description

   ${description}

  ## Installation

   ${install}

  ## Usage

  ${usage}

  ## Contribution 

  ${contribution}

  ## Tests

  ${test}

  ## Questions
  ### Github: [${questions.github}](https://github.com/${questions.gitLink})
  ### Email: ${questions.email}

   ## License
   Licensed under ${license}

`;
}

module.exports = generateMarkdown;
