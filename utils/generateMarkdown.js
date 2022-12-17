// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else {
    return `* [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `## [License](#license)     
    This project is licensed under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}


## Table-of-Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
${renderLicenseLink(data.license)}
* [Questions](#questions)

## [Description](#table-of-contents)
${data.description}


## [Installation](#table-of-contents)
${data.installation}

## [Usage](#table-of-contents)
${data.usage}
${renderLicenseSection(data.license)}

## [Contribution](#table-of-contents)
${data.contribution}

## [Test](#table-of-contents)
${data.test}

## [Questions](#table-of-contents)
If you have any questions, please contact me at ${data.email} or visit my GitHub page at [${data.github}]
                         
`;
}

module.exports = generateMarkdown;
