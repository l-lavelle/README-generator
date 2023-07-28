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
        choices:["Apache License 2.0","GNU General Public License v3.0","MIT License"],
        name: "license"
    }




// Add License, Contributing, Tests, and Questions, github username, email address
// https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // works
    const {title, description,installation,usage,license}=data
    console.log(license)


    

    // works
    // const trial = JSON.parse(JSON.stringify(data))
    // console.log(trial.title)


    const templateliteral=license
    fs.writeFile(fileName,templateliteral, (err)=>
    {if (err){
        console.error(err)
    }}
    )

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(projectQuestions)
    .then((response)=> 
        {writeToFile("README.md",response)});
}

// Function call to initialize app
init();
