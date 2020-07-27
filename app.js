const Manager = require("./Manager.js");
const Engineer = require("./Engineer.js");
const Intern = require("./Intern.js");
const Employee = require("./Employee.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
var employees = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./htmlRenderer");

function engineerQuestions(generalAnswers) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "What is your GitHub user name?",
      },
    ])
    .then(function (engineerAnswer) {
      employeeAnswers = { ...generalAnswers, github: engineerAnswer.github };
      employees.push(employeeAnswers);
    });
}

function internQuestions(generalAnswers) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "What is the name of your school?",
      },
    ])
    .then(function (internAnswer) {
      employeeAnswers = { ...generalAnswers, school: internAnswer.school };
      employees.push(employeeAnswers);
    });
}

function managerQuestions(generalAnswers) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "officenumber",
        message: "What is your office number?",
      },
    ])
    .then(function (managerAnswer) {
      employeeAnswers = {
        ...generalAnswers,
        officenumber: managerAnswer.officenumber,
      };
      employees.push(employeeAnswers);
    });
}

function userInput() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "Manager"],
      },
      {
        type: "input",
        name: "name",
        message: "Please enter your name.",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your employee id number?",
      },
    ])
    .then(function (generalAnswers) {
      switch (generalAnswers.role) {
        case "Engineer":
          engineerQuestions(generalAnswers);
          break;
        case "Intern":
          internQuestions(generalAnswers);
          break;
        case "Manager":
          managerQuestions(generalAnswers);
          break;
        default:
      }
    });
}
// const endQuestions = () => {
//   inquirer
//     .prompt([
//       {
//         type: "confirm",
//         name: "endquestions",
//         message: "Would you like to enter another employee?",
//       },
//     ])
//     .then((answer) => {
//       if(answer.endquestions === false){

//       }
//     });
// };

userInput();
console.log(employees);
// endQuestions();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
