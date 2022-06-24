const Employee = require("../lib/employee");
const fs = require('fs');

const makeTeam = team => {

  const generateManagerCard = manager => {
    return `<div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">${manager.getRole()}</h5>
</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${manager.name}</li>
    <a href='mailto:${manager.email}'><li class="list-group-item">${manager.email}</li></a>
    <li class="list-group-item">${manager.getOfficeNumber()}</li>
  </ul>
  <div class="card-body">
  </div>
</div>`
  }

  const generateInternCard = intern => {
    return `<div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">${intern.getRole()}</h5>
</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${intern.name}</li>
    <a href='mailto:${intern.email}'><li class="list-group-item">${intern.email}</li></a>
    <li class="list-group-item">${intern.getSchool()}</li>
  </ul>
  <div class="card-body">
  </div>
</div>`
  }

  const generateEngineerCard = engineer => {
    return `<div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">${engineer.getRole()}</h5>
</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${engineer.name}</li>
    <a href='mailto:${engineer.email}'><li class="list-group-item">${engineer.email}</li></a>
    <li class="list-group-item">${engineer.getGithub()}</li>
  </ul>
  <div class="card-body">
  </div>
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
