const Employee = require("../lib/employee");

const makeTeam = team => {

    const generateManagerCard = manager => {
      return
`<div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">${manager.role}</h5>
</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${manager.name}</li>
    <a href='mailto:${manager.email}'><li class="list-group-item">${manager.email}</li></a>
    <li class="list-group-item">${manager.id}</li>
  </ul>
  <div class="card-body">
  </div>
</div>`
    }

    const html = [];

    html.push(team
        .filter(employee => Employee.getRole() === 'Manager')
        .map(manager => generateManagerCard(manager))
    )
    return html.join('');

    // module.exports = teamHtml = {
    //     return 
    // }
}