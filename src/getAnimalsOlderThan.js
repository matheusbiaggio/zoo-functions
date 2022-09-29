const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findAnimal = data.species.find(({ name }) => name.includes(animal));
  // console.log(findAnimal);
  return findAnimal.residents.every(({ age: idade }) => idade >= age);
}

console.log(getAnimalsOlderThan('tigers', 17));

module.exports = getAnimalsOlderThan;
