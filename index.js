// TODO: Include packages needed for this application
const fs = require('fs')
const generateMd= require('./utils/generateMarkdown')
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const projectQuestions = [
    {
        type:"input",
        message:"What is the title of the project?",
        name:"title",
        validate: function(title){
            if (title.trim()===""){
                return console.log("\nPlease enter a title")
            } else {
                return true
            }
        }
    },
    {
        type: "input",
        message: "Give a brief description of your project. Include what your application does and technologies used.",
        name: "description",
        validate: function(description){
            if (description.trim()===""){
                return console.log("\nPlease enter a description")
            } else {
                return true
            }
        }
    },
    {
        type:"input",
        message:"What are the steps required to install your project? Are there any required dependencies?",
        name:"installation",
        validate: function(installation){
            if (installation.trim()===""){
                return console.log("\nPlease explain if there is any installation needed. If none enter N/A.")
            } else {
                return true
            }
        }
    },
    {
        type:"input",
        message:"Provide instructions for how to use application:",
        name:"usage",
        validate: function(usage){
            if (usage.trim()===""){
                return console.log("\nPlease provide instructions for how to use application.")
            } else {
                return true
            }
        }
    },
    {
        type:"list",
        message:"Choose which license you are using?",
        choices:["None","Apache 2.0","MIT","GPLv2","GPLv3","Unlicense"],
        name: "license"
    },
    {
        type:"input", 
        message:"Name any contributers that helped you collaborate on the project.",
        name:"contributers",
        validate: function(contributers){
            if (contributers.trim()===""){
                return console.log("\nPlease provide contributors. If none enter N/A.")
            } else {
                return true
            }
        }
    },
    {
        type:"input", 
        message:"If you used any websites to help on project enter the website? (Enter a comma between each site)",
        name:"websites",
        validate: function(websites){
            if (/^https?:\/\/\S+/.test(websites)){
                return true
            } else{
                return console.log("\nPlease enter website in format http(s)://")
            }
        }
    },
    {
        type:"input",
        message:"If you wrote any tests for your application describe them",
        name:"test",
        validate: function(test){
            if (test.trim()===""){
                return console.log("\nEnter test description for project. If none enter N/A.")
            } else {
                return true
            }
        }
    },
    {
        type:"input",
        message:"Please enter your github username",
        name:"github",
        validate: function(github){
            if (github.trim()===""){
                return console.log("\nPlease enter your Github username.")
            } else {
                return true
            }
        }
    },
    {
        type:"input",
        message:"Please enter email address",
        name:"email",
        validate: function(email){
            if (/\S+@\S+\.\S+/.test(email)){
                return true
            } else{
                return console.log("\nPlease enter email in format bob@email.com")
            }
        }
    }
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
        {writeToFile("Test.md",generateMd(response))},
      )
}

// Function call to initialize app
init();
