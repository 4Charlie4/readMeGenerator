const { rejects } = require("assert");
const fs = require("fs");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT License") {
    return new Promise((resolve, rejects) => {
      fs.writeFile("./LICENSE.txt", license, (err) => {
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
  }
}

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

  return `# ${projectName}
  

  ## Table of Contents
    -[Description](#Description)
    -[Installation](#Installation)
    -[Usage](#Usage)
    -[Contribution](#Contribution)
    -[Tests](#Tests)
    -[License](#License)

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
  -${questions.github}
  -${questions.gitLink}
  -${questions.email}

  ##License
  ${renderLicenseSection(license)}

`;
}

module.exports = generateMarkdown;
