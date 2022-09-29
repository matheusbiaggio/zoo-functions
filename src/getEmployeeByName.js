const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  if (data.employees.some(({ firstName }) => (employeeName.includes(firstName)))) {
    if (data.employees.some(({ lastName }) => (employeeName.includes(lastName)))) {
      return data.employees.find(({ lastName }) => (employeeName.includes(lastName)));
    }
    return data.employees.find(({ firstName }) => (employeeName.includes(firstName)));
  }
}

console.log(getEmployeeByName('Nelson'));

module.exports = getEmployeeByName;
