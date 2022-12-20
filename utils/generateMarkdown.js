// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Function to render the license link
  if (license === "none") {
    return "";
  } else {
    return `* [License](#license)`;
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Function to render the license section
  if (license === "none") {
    return "";
  } else {
    return `## [License](#license)     
    This project is licensed under the ${license} license.`;
  }
}

/*START: **********************MARKDOWN GENERATOR TEMPLATE**********************/
function generateMarkdown(data) {
  // Function to generate the markdown
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
To install necessary dependencies, run the following command:
${data.installation}


## [Usage](#table-of-contents)
${data.usage}
${renderLicenseSection(data.license)}


## [Contribution](#table-of-contents)
${data.contribution}


## [Test](#table-of-contents)
To run tests, run the following command:
${data.test}


## [Questions](#table-of-contents)
If you have any questions, please contact me at ${data.email} or visit my GitHub page at [${data.github}]       
`;
}
/***********************MARKDOWN GENERATOR TEMPLATE*********************: END*/

// Exporting the generateMarkdown function
module.exports = generateMarkdown;
