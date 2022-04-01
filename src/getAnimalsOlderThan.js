/* Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie
   possuem a idade mínima especificada. */

const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const filtraNome = species.filter((animals) => animals.name === animal);
  const filtraIdade = filtraNome.every((id) => id.residents.every((anima) => anima.age >= age));
  return filtraIdade;
}

module.exports = getAnimalsOlderThan;
