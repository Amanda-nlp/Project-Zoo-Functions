/* Esta função é responsável pela busca das espécies de animais por id.
   Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro,
   podendo receber um ou mais ids. */

const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return species.filter((animals) => ids.find((animal) => animal === animals.id));
}

module.exports = getSpeciesByIds;
