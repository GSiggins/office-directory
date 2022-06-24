const Employee = require("../lib/employee");
const fs = require('fs');

const makeTeam = team => {

  const generateManagerCard = manager => {
    return `<div class="card text-bg-primary mb-4" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">${manager.getRole()}</h5>
</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> Name: ${manager.name}</li>
    <a href='mailto:${manager.email}'><li class="list-group-item"> Email: ${manager.email}</li></a>
    <li class="list-group-item"> ID: ${manager.id}</li>
    <li class="list-group-item"> Office Number: ${manager.getOfficeNumber()}</li>
  </ul>
</div>`
  }

  const generateInternCard = intern => {
    return `<div class="card text-bg-dark p-4" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">${intern.getRole()}</h5>
</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> Name: ${intern.name}</li>
    <a href='mailto:${intern.email}'><li class="list-group-item">Email: ${intern.email}</li></a>
    <li class="list-group-item"> ID: ${intern.id}</li>
    <li class="list-group-item"> School: ${intern.getSchool()}</li>
  </ul>
</div>`
  }

  const generateEngineerCard = engineer => {
    return `<div class="card text-bg-dark p-4" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">${engineer.getRole()}</h5>
</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> Name: ${engineer.name}</li>
    <a href='mailto:${engineer.email}'><li class="list-group-item"> Email: ${engineer.email}</li></a>
    <li class="list-group-item"> ID: ${engineer.id}</li>
    <a href='${engineer.getGithub()}'><li class="list-group-item"> GitHub: ${engineer.getGithub()}</li></a>
  </ul>
</div>`
  }

  const html = [];

  html.push(team
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => generateManagerCard(manager))
  )
  html.push(team
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateEngineerCard(engineer))
  )
  html.push(team
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => generateInternCard(intern))
  )

  return html.join('');
}

module.exports = makeTeam; 
