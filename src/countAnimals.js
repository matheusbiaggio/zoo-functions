const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    let allAnimals = {};
    allAnimals = species.map(({ name, popularity }) => ({
      [name]: popularity,
    }));
    const newObject = Object.assign({}, ...allAnimals);
    return newObject;
  }
  if (animal.sex !== undefined) {
    const specieFind = data.species.find(({ name }) => name.includes(animal.specie));
    const sexSpecie = specieFind.residents.filter(({ sex: sexo }) => sexo === animal.sex);
    return sexSpecie.length;
  }
  const specieFind = data.species.find(({ name }) => name.includes(animal.specie));
  return specieFind.residents.length;
}

console.log(countAnimals());

module.exports = countAnimals;
