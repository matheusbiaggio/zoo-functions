const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    return species.map(({ name, popularity }) => `${name}: ${popularity}`);
  }
  if (animal.sex !== undefined) {
    const specieFind = data.species.find(({ name }) => name.includes(animal.specie));
    const sexSpecie = specieFind.residents.filter(({ sex: sexo }) => sexo === animal.sex);
    return sexSpecie.length;
  }
  const specieFind = data.species.find(({ name }) => name.includes(animal.specie));
  return specieFind.residents.length;
}

// console.log(countAnimals({ specie: 'lions' }));

module.exports = countAnimals;
