/* Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas */
const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName == null) {
    return {};
  }
  return employees.find((n) => employeeName === n.firstName || employeeName === n.lastName);
}
console.log(getEmployeeByName('Emery'));
module.exports = getEmployeeByName;
