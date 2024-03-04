const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'instals',
      message: 'What three letters would you like your logo to have?'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like from the choices below?',
        choices: ['square', 'circle', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be?'
    },
];

// TODO: create a function to create SGV logo

function createLogo() {
    inquirer.prompt(questions).then((answers) => {
        const logo = shapes.createLogo(answers.instals, answers.textColor, answers.shape, answers.shapeColor);
        console.log(logo);
        fs.writeFileSync('logo.svg', logo);
    });
}