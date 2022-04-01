/* A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro. */
/* Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array
   com nome, sexo e idade do animal mais velho dessa espécie. */
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const encontrando = employees.find((funcionarios) => funcionarios.id === id).responsibleFor[0];
  const encontrandoAnimal = species.find((animal) => animal.id === encontrando);
  const { residents } = encontrandoAnimal;
  const encontrandoAnimalMaisVelho = residents.reduce((acc, i) => ((acc.age > i.age) ? acc : i));
  return Object.values(encontrandoAnimalMaisVelho);
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
