/* Esta função é responsável por contabilizar a quantidade de animais de cada espécie.
   Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto,
   e o total de animais dessa espécie é o seu valor;
   Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
   Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do sexo feminino. */

const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal == null) {
    const chaveAnimais = species.reduce((acc, item) => {
      acc[item.name] = item.residents.length;
      return acc;
    }, {});
    return chaveAnimais;
  }
  if (animal.sex == null) {
    const { specie: tipo } = animal;
    const descobrindoAnimal = species.find((item) => item.name === tipo).residents.length;
    return descobrindoAnimal;
  }
  const { sex } = animal;
  const { specie: tipoAnimal } = animal;
  const descobrindoAnimal = species.find((item) => item.name === tipoAnimal);
  const { residents } = descobrindoAnimal;
  const descobrindoSexo = residents.filter((item) => item.sex === sex).length;
  return descobrindoSexo;
}
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
