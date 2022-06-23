const inquirer = require('inquirer')
const Manager = require('./lib/manager')
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
                    answers.id,
                    answers.name,
                    answers.email,
                    answers.officenumber,
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
                    name: 'officeNumber'
                },
            ])
            .then(answers => {
                const engineer = new Engineer(
                    answers.id,
                    answers.name,
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
                    name: 'officeNumber'
                },
            ])
            .then(answers => {
                const engineer = new Engineer(
                    answers.id,
                    answers.name,
                    answers.email,
                    answers.github,
                )
                teamMemberObjArray.push(engineer);
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
        fs.writeFile('./dist/index.html', renderTeam(teamMemberObjArray))
    }


    createManager();
}

init()