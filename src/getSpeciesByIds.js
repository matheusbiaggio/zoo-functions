// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  console.log(ids);
  if (ids.length === 0) {
    return [];
  }
  return data.species.filter(({ id }) => (ids.includes(id)));
}

module.exports = getSpeciesByIds;
