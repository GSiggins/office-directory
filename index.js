const inquirer = require('inquirer')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const fs = require('fs')
const renderTeam = require('./src/html-templates')

const teamMemberObjArray = []

const init = () => {
    const createManager = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the managers name?',
                    name: 'name'
                },
                {
                    type: 'input',
                    message: 'What is the managers id?',
                    name: 'id'
                },
                {
                    type: 'input',
                    message: 'What is the managers email?',
                    name: 'email'
                },
                {
                    type: 'input',
                    message: 'What is the managers office number?',
                    name: 'officeNumber'
                },
            ])
            .then(answers => {
                const manager = new Manager(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.officeNumber,
                )
                teamMemberObjArray.push(manager);
                addEmployees();
            })
    };
    const createEngineer = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the engineers name?',
                    name: 'name'
                },
                {
                    type: 'input',
                    message: 'What is the engineers id?',
                    name: 'id'
                },
                {
                    type: 'input',
                    message: 'What is the engineers email?',
                    name: 'email'
                },
                {
                    type: 'input',
                    message: 'What is the engineers github?',
                    name: 'github'
                },
            ])
            .then(answers => {
                const engineer = new Engineer(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.github,
                )
                teamMemberObjArray.push(engineer);
                addEmployees();
            })
    }
    const createIntern = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the intern name?',
                    name: 'name'
                },
                {
                    type: 'input',
                    message: 'What is the intern id?',
                    name: 'id'
                },
                {
                    type: 'input',
                    message: 'What is the intern email?',
                    name: 'email'
                },
                {
                    type: 'input',
                    message: 'What is the intern school?',
                    name: 'school'
                },
            ])
            .then(answers => {
                const intern = new Intern(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.school,
                )
                teamMemberObjArray.push(intern);
                addEmployees();
            })
    }
    function addEmployees() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'What employee would you like to add?',
                    name: 'teamadd',
                    choices: ['Engineer', 'Intern', "I'm finished"]
                },
            ])
            .then(answer => {
                switch (answer.teamadd) {
                    case 'Engineer':
                        createEngineer();
                        break;

                    case 'Intern':
                        createIntern();
                        break;

                    default:
                        buildTeam();
                        break;
                }
            })
    }



    function buildTeam() {
        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <title>Company Directory</title>
        </head>
        <header>
            <nav class="navbar bg-info">
                <div class="container-fluid justify-content-center">
                <h1>Company Directory</h1>
                </div>
            </nav>
        <body>
        <div class = 'd-flex justify-content-center align-items-center m-4'>
        ${renderTeam(teamMemberObjArray)}
        </div>
        </body>
        </html>`
        fs.writeFile('./dist/index.html', html, (err) => 
        err ? console.error(err) : console.log("Success!")
        )
    }
    createManager();
}

init()