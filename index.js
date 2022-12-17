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
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please provide contribution guidelines.",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide test instructions.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license.",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address.",
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
