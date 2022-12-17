// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const inquirer = require("inquirer"); // inquirer
const fs = require("fs"); // file system
const generateMarkdown = require("./utils/generateMarkdown"); // generate markdown

const questions = [
  // questions
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions.",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please enter installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information.",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter usage information!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contribution",
    message: "Please provide contribution guidelines.",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log("Please enter contribution guidelines!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Please provide test instructions.",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please enter test instructions!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license.",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please select a license!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your GitHub username.",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address.",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("README.md created!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((input) => {
    fs.writeFile("README.md", generateMarkdown(input), (err) => {
      if (err) throw err;
      console.log("README.md created!");
    });
  });
}

// Function call to initialize app
init(); // init
