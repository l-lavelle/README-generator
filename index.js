// TODO: Include packages needed for this application
const fs = require('fs')
const generateMd= require('./utils/generateMarkdown')
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const projectQuestions = [
    {
        type:"input",
        message:"What is the title of the project?",
        name:"title"
    },
    {
        type: "input",
        message: "Give a brief description of your project",
        name: "description"
    },
    {
        type:"input",
        message:"What are the steps required to install your project?",
        name:"installation"
    },
    {
        type:"input",
        message:"Provide insturctions for how to use application",
        name:"usage"
    },
    {
        type:"list",
        message:"Choose which license you are using",
        choices:["None","Apache 2.0","MIT"],
        name: "license"
    },
    {
        type:"input",
        message:"Name any contributers",
        name:"contributers"
    },
    {
        type:"input",
        message:"Are there any tests",
        name:"test"
    },
    {
        type:"input",
        message:"Please enter github username",
        name:"github"
    },
    {
        type:"input",
        message:"Please enter email address",
        name:"email"
    }
// https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {   
    fs.writeFile(fileName,data, (err)=>
    {if (err){
        console.error(err)
    }}
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(projectQuestions)
    .then((response)=> 
        {writeToFile("README.md",generateMd(response))},
      )
}

// Function call to initialize app
init();
