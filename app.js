const inquirer = require("inquirer");
const figlet = require("figlet");
const consoleTable = require("console.table");
const db = require("./db/connections.js");

console.log(figlet.textSync("Employee Tracker", {
    font: 'big',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));
const runDB = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'prompt',
            message: 'What would you like to do?',
            choices: ['Add an employee',
                    'Remove an employee',
                    'Update an employees role',
                    'View all employees',
                    'View all jobs',
                    'View all departments',
                    'Nothing']
        }
    ])
}



runDB()