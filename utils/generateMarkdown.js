const { rejects } = require("assert");
const fs = require("fs");

function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
}

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

  return `# ${projectName} ${renderLicenseBadge(license)}
 

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)

  ## Description

   ${description}

  ## Installation

   ${install}

  ## Usage

  ${usage}

  ## Contribution 

  ${contribution}

  ## Test

  ${test}

  ## Questions

  ### Github: [${questions.github}](https://github.com/${questions.github})
  ### [Project](${questions.link})
  ### Email: ${questions.email}

   ## License
   Licensed under ${license}

`;
}

module.exports = generateMarkdown;
