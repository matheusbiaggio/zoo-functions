const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    let noneParam = {};
    for (let i = 0; i < data.species.length; i += 1) {
      noneParam = { name: data.species.popularity };
    }
    return noneParam;
  }
  return 'ainda não';
}

console.log(countAnimals());

module.exports = countAnimals;
