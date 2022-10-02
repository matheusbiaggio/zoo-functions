const data = require('../data/zoo_data');
const getEmployeeByName = require('./getEmployeeByName');

function findAnimalByEmployee(objectParam) {
  if (Object.keys(objectParam).includes('name')) {
    const employeeByName = getEmployeeByName(objectParam.name);
    const locationsByAnimal = [];
    for (let i = 0; i < employeeByName.responsibleFor.length; i += 1) {
      locationsByAnimal[i] = data.species.filter((animal) =>
        animal.id.includes(employeeByName.responsibleFor[i]));
    }
    return locationsByAnimal;
  }
  const employeeById = data.employees.find((employeId) => employeId.id.includes(objectParam.id));
  const locationsByAnimal = [];
  for (let i = 0; i < employeeById.responsibleFor.length; i += 1) {
    locationsByAnimal[i] = data.species.filter((animal) =>
      animal.id.includes(employeeById.responsibleFor[i]));
  }
  return locationsByAnimal;
}

function getLocationAnimals(objectParam) {
  const animalEmployee = findAnimalByEmployee(objectParam);
  const locationFind = [];
  const locationWithRepeat = [];
  for (let i = 0; i < animalEmployee.length; i += 1) {
    locationFind[i] = animalEmployee[i].map((locationFinder) => locationFinder.location);
  }
  for (let i = 0; i < locationFind.length; i += 1) {
    [locationWithRepeat[i]] = locationFind[i];
  }
  const locationNoRepeat = Array.from(new Set(locationWithRepeat));
  return locationNoRepeat;
}

function returnObject(employe, locationAnimal) {
  return {
    id: employe.id,
    fullName: `${employe.firstName} ${employe.lastName}`,
    species: employe.responsibleFor,
    locations: locationAnimal,
  };
}

function getEmployeesCoverage(objectParam) {
  if (objectParam === undefined) {
    return 'sem parametro';
  }
  if (Object.keys(objectParam).includes('id')) {
    const employeeById = data.employees.find((employeId) => employeId.id.includes(objectParam.id));
    const locationAnimal = getLocationAnimals(objectParam);
    return returnObject(employeeById, locationAnimal);
  }
  if (Object.keys(objectParam).includes('name')) {
    const employeeByName = getEmployeeByName(objectParam.name);
    const locationAnimal = getLocationAnimals(objectParam);
    return returnObject(employeeByName, locationAnimal);
  }
}

const param = {
  name: 'Bethea',
};
console.log(getEmployeesCoverage(param));

module.exports = getEmployeesCoverage;
