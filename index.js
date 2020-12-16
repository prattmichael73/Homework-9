var inquirer = require("inquirer")
var fs = require("fs")
var generateMarkdown = require("./utils/generateMarkdown")
// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Can you describe the functionality of your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "How can you install your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "How can you install your project?",
    },
    {
        type: "input",
        name: "User Information",
        message: "How to use the app?"
    },
    {
        type: "input",
        name: "Contributions",
        message: "What each member was in charge of?"
    },
    {
        type: "input",
        name: "Tests",
        message: "Does the app function properly when tested?"
    },
    {
        type: "input",
        name: "license",
        message: "What license does this app use?"
    },
    {
        type: "input",
        name: "badge",
        message: "Does this app have a badge?"
    },
    {
        type: "input",
        name: "github",
        message: "Is there a link to the app's repo on github?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    var text = generateMarkdown(data)
    fs.writeFileSync(fileName, text)
}

// function to initialize program
function init() {
    inquirer
        .prompt(
            questions
        )
        .then(answers => {
            // Use user feedback for... whatever!!
            console.log(answers)
            writeToFile("./output/README.md", answers)
        })
}

// function call to initialize program
init();

