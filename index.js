const inquirer = require('inquirer');
const fs = require('fs');
const ShapesModule = require('./lib/shapes.js');

const { Triangle, Circle, Square } = ShapesModule;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the shape:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color:',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like from the choices below?',
        choices: ['circle', 'triangle', 'square'],
    },
];

// TODO: create a function to create SVG logo
function createLogo() {
    inquirer.prompt(questions).then((answers) => {
        let shape;

        // Choose the correct shape class based on user input
        switch (answers.shape) {
            case 'circle':
                shape = new Circle(answers.text, answers.textColor, answers.shapeColor);
                break;
            case 'triangle':
                shape = new Triangle(answers.text, answers.textColor, answers.shapeColor);
                break;
            case 'square':
                shape = new Square(answers.text, answers.textColor, answers.shapeColor);
                break;
            default:
                console.error('Invalid shape:', answers.shape);
                return;
        }

        const logo = `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
        
            ${shape.render()}
        
        
        </svg>`;
                console.log(logo);
                fs.writeFileSync('logo.svg', logo);
            });
        }
        

// Call your function to run the script
createLogo();
