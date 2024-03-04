const inquirer = require('inquirer');
const fs = require('fs');
const ShapesModule = require('./lib/shapes.js'); // Import the entire module

const { circle, rectangle, square } = ShapesModule; // Destructure the classes



// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'initials',
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
        inquirer.prompt(questions).then((answers) => {
            console.log(answers)}),
        },
        
    
    {
        type: 'input',
        name: 'radius',
        message: 'Enter the radius of the circle:',
        when: (answers) => answers.shape === 'circle', // Only ask if the shape is a circle
    },
    // Additional questions for rectangle
    {
        type: 'input',
        name: 'width',
        message: 'Enter the width of the rectangle:',
        when: (answers) => answers.shape === 'rectangle', // Only ask if the shape is a rectangle
    },
    {
        type: 'input',
        name: 'height',
        message: 'Enter the height of the rectangle:',
        when: (answers) => answers.shape === 'rectangle', // Only ask if the shape is a rectangle
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be?'
    },
    
];


// TODO: create a function to create SVG logo
function createLogo() {
    inquirer.prompt(questions).then((answers) => {
        let shape;

        // Choose the correct shape class based on user input
        switch (answers.shape) {
            case 'circle':
                shape = new circle(answers.shapeColor, answers.radius);
                break;
            case 'rectangle':
                shape = new rectangle(answers.shapeColor, answers.width, answers.height);
                break;
            case 'square':
                shape = new square(answers.shapeColor, answers.side);
                break;
            default:
                console.error('Invalid shape:', answers.shape);
                return;
        }

        const logo = shape.render();
        console.log(logo);
        fs.writeFileSync('logo.svg', logo);
    });
}

// Call your function to run the script
createLogo();