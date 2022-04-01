/* A função é responsável por disponibilizar as informações de horário dos animais em uma consulta para o usuário,
  que pode querer ter acesso ao cronograma da semana, de um dia ou de um animal em específico.

  Analise os testes unitários para entender os retornos que são esperados para esta função;
  Quebre o problema em funções menores para que fique mais simples de administrar a responsabilidade de cada uma delas. */
const data = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const diasDaSemana = ['Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const diasDaSemana2 = ['Saturday', 'Sunday', 'Monday'];
const listaAnimais = ['lions', 'otters', 'elephants', 'snakes', 'frogs', 'bears',
  'tigers', 'penguins', 'giraffes'];

function getDays(dias) {
  const procurandoAnimais = species.filter((item) => item.availability.includes(dias));
  return procurandoAnimais.map((item) => item.name);
}

function getMonday() {
  const monday = {
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
  return monday;
}
function getTuesday() {
  const tuesday = {
    Tuesday: {
      officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
      exhibition: getDays('Tuesday'),
    },
  };
  return tuesday;
}
function getWednesday() {
  const wednesday = {
    Wednesday: {
      officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
      exhibition: getDays('Wednesday'),
    },
  };
  return wednesday;
}
function getThursday() {
  const thursday = {
    Thursday: {
      officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
      exhibition: getDays('Thursday'),
    },
  };
  return thursday;
}
function getFriday() {
  const friday = {
    Friday: {
      officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
      exhibition: getDays('Friday'),
    },
  };
  return friday;
}
function getSaturday() {
  const Saturday = {
    Saturday: {
      officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
      exhibition: getDays('Saturday'),
    },
  };
  return Saturday;
}
function getSunday() {
  const sunday = {
    Sunday: {
      officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
      exhibition: getDays('Sunday'),
    },
  };
  return sunday;
}

function testAnimals(animal) {
  const procurandoAnimal = species.filter((item) => item.name === animal);
  const array = procurandoAnimal[0].availability;
  return array;
}

function intermedio(dias1) {
  if (dias1 === 'Tuesday') return getTuesday();
  if (dias1 === 'Wednesday') return getWednesday();
  if (dias1 === 'Thursday') return getThursday();
  if (dias1 === 'Friday') return getFriday();
}
function intermedio2(dias2) {
  if (dias2 === 'Saturday') return getSaturday();
  if (dias2 === 'Sunday') return getSunday();
  if (dias2 === 'Monday') return getMonday();
}

function condicaoNula(cond) {
  const condicao = cond == null || cond !== listaAnimais || cond !== diasDaSemana
|| cond !== diasDaSemana2;
  return condicao;
}

function fraseNula() {
  const dias = {
    Tuesday: { officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
      exhibition: getDays('Tuesday') },
    Wednesday: { officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
      exhibition: getDays('Wednesday') },
    Thursday: { officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
      exhibition: getDays('Thursday') },
    Friday: { officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
      exhibition: getDays('Friday') },
    Saturday: { officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
      exhibition: getDays('Saturday') },
    Sunday: { officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
      exhibition: getDays('Sunday') },
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  return dias;
}

function getSchedule(scheduleTarget) {
  if (listaAnimais.includes(scheduleTarget)) return testAnimals(scheduleTarget);

  if (diasDaSemana.includes(scheduleTarget)) return intermedio(scheduleTarget);

  if (diasDaSemana2.includes(scheduleTarget)) return intermedio2(scheduleTarget);

  if (condicaoNula(scheduleTarget)) return fraseNula();
}
console.log(getSchedule('Monday'));
module.exports = getSchedule;
