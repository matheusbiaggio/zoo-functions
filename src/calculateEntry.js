const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let allEntrants = {};
  const entratsChild = entrants.filter(({ age: ageFilter }) => ageFilter < 18);
  const entratsAdult = entrants.filter(({ age: ageFilter }) => ageFilter >= 18 && ageFilter < 50);
  const entratsSenior = entrants.filter(({ age: ageFilter }) => ageFilter >= 50);
  allEntrants = {
    child: entratsChild.length,
    adult: entratsAdult.length,
    senior: entratsSenior.length,
  };
  return allEntrants;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const priceTotalChild = (countEntrants(entrants).child) * (data.prices.child);
  const priceTotalAdult = (countEntrants(entrants).adult) * (data.prices.adult);
  const priceTotalSenior = (countEntrants(entrants).senior) * (data.prices.senior);
  return priceTotalChild + priceTotalAdult + priceTotalSenior;
}

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];
// console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
