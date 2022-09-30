const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const arrayRelated = employees.filter((related) => related.managers.includes(managerId));
    const person = arrayRelated.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
    return person;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
