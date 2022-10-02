const data = require('../data/zoo_data');

function getOldestAnimalsById(id) {
  const employe = data.employees.filter((element) => element.id.includes(id));
  const idAnimalsResponsible = employe.map((element) => element.responsibleFor);
  const animals = [];
  for (let i = 0; i < idAnimalsResponsible[0].length; i += 1) {
    animals[i] = data.species.filter((element) => element.id.includes(idAnimalsResponsible[0][i]));
  }
  const ageAnimals = animals[0].map((element) => element.residents);
  console.log(ageAnimals[0]);
  const oldestByClass = ageAnimals[0].reduce((acc, curr) => {
    if (acc.age > curr.age) {
      return acc;
    }
    return curr;
  });
  return oldestByClass;
}

function getOldestFromFirstSpecies(id) {
  // let oldest = [];
  const oldestByClass = getOldestAnimalsById(id);
  // oldest = oldestByClass.reduce((acumulator, current) => {
  //   if (acumulator.age > current.age) {
  //     return acumulator;
  //   }
  //   return current;
  // });
  return [oldestByClass.name, oldestByClass.sex, oldestByClass.age];
}

module.exports = getOldestFromFirstSpecies;
