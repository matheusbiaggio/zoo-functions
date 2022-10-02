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
  // const locationNoRepeat = Array.from(new Set(locationWithRepeat));
  return locationWithRepeat;
}

function getNameAnimalsById(objectParam) {
  const animalEmployee = findAnimalByEmployee(objectParam);
  const nameFind = [];
  const nameAnimals = [];
  for (let i = 0; i < animalEmployee.length; i += 1) {
    nameFind[i] = animalEmployee[i].map((nameFinder) => nameFinder.name);
  }
  for (let i = 0; i < nameFind.length; i += 1) {
    [nameAnimals[i]] = nameFind[i];
  }
  return nameAnimals;
}

function returnObject(employe, locationAnimal, objectParam) {
  const namesAnimals = getNameAnimalsById(objectParam);
  return {
    id: employe.id,
    fullName: `${employe.firstName} ${employe.lastName}`,
    species: namesAnimals,
    locations: locationAnimal,
  };
}

function getEmployeesCoverage(objectParam) {
  if (objectParam === undefined) {
    return data.employees;
  }
  if (Object.keys(objectParam).includes('id')) {
    const employeeById = data.employees.find((employeId) => employeId.id.includes(objectParam.id));
    const locationAnimal = getLocationAnimals(objectParam);
    return returnObject(employeeById, locationAnimal, objectParam);
  }
  if (Object.keys(objectParam).includes('name')) {
    const employeeByName = getEmployeeByName(objectParam.name);
    const locationAnimal = getLocationAnimals(objectParam);
    return returnObject(employeeByName, locationAnimal, objectParam);
  }
  throw new Error('O id apresentado não é válido');
}

const param = {
  name: 'Ardith',
};
console.log(getEmployeesCoverage(param));

module.exports = getEmployeesCoverage;
