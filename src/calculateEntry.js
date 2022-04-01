/* Esta função irá receber um array de visitantes no seguinte formato: */
/* const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]; */
/* Você deve isolar a parte da lógica na função countEntrants que se encontra no mesmo arquivo da função calculateEntry.
Ela deverá receber o array de visitantes e retornar um objeto com a contagem de acordo com os seguintes critérios de
classificação:
Pessoas com idade menor que 18 anos são classificadas como crianças (child);
Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).
***O retorno da função deverá ser um objeto no seguinte formato: { child: 3, adult: 2, senior: 1 }.

Após terminar a implementação da função countEntrants você deverá utilizá-la para implementar a função calculateEntry.
Esta deverá receber um array de visitantes e a partir da quantidade de visitantes e faixa etária de cada um, deverá
retornar o valor total a ser cobrado.
 */
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((crianca) => crianca.age < 18).length;
  const adult = entrants.filter((adulto) => adulto.age >= 18 && adulto.age < 50).length;
  const senior = entrants.filter((senhor) => senhor.age >= 50).length;
  return { child, adult, senior };
}
function calculateEntry(entrants) {
  if (entrants == null) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return (child * 20.99) + (adult * 49.99) + (senior * 24.99);
}
module.exports = { calculateEntry, countEntrants };
