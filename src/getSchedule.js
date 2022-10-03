const data = require('../data/zoo_data');

const { species } = data;
const week = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dh = data.hours;

function officeHour(day) {
  return `Open from ${dh[day].open}am until ${dh[day].close}pm`;
}

function filterSpecies() {
  const allAnimals = [];
  allAnimals[0] = species.filter((element) => element.availability.includes('Tuesday'));
  allAnimals[1] = species.filter((element) => element.availability.includes('Wednesday'));
  allAnimals[2] = species.filter((element) => element.availability.includes('Thursday'));
  allAnimals[3] = species.filter((element) => element.availability.includes('Friday'));
  allAnimals[4] = species.filter((element) => element.availability.includes('Saturday'));
  allAnimals[5] = species.filter((element) => element.availability.includes('Sunday'));
  allAnimals[6] = species.filter((element) => element.availability.includes('Monday'));
  return allAnimals;
}

function exhibition(index) {
  const allAnimals = filterSpecies();
  return allAnimals[index].map((nameAnimal) => nameAnimal.name);
}

function generateObjAllDay() {
  const animalObj = {
    Tuesday: {
      officeHour: officeHour('Tuesday'), exhibition: exhibition(0) },
    Wednesday: {
      officeHour: officeHour('Wednesday'), exhibition: exhibition(1) },
    Thursday: {
      officeHour: officeHour('Thursday'), exhibition: exhibition(2) },
    Friday: {
      officeHour: officeHour('Friday'), exhibition: exhibition(3) },
    Saturday: {
      officeHour: officeHour('Saturday'), exhibition: exhibition(4) },
    Sunday: {
      officeHour: officeHour('Sunday'), exhibition: exhibition(5) },
    Monday: {
      officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  return animalObj;
}

function objectWeek(scheduleTarget) {
  const objAll = generateObjAllDay();
  console.log(scheduleTarget);
  return objAll[scheduleTarget];
}

function getSchedule(scheduleTarget) {
  if (data.species.some((nameAnimal) => nameAnimal.name.includes(scheduleTarget))) {
    const findAnimal = data.species.filter((nameAnimal) =>
      nameAnimal.name.includes(scheduleTarget));
    return findAnimal.map((days) => days.availability)[0];
  }
  if (week.includes(scheduleTarget)) {
    const objDay = { [scheduleTarget]: objectWeek(scheduleTarget) };
    return objDay;
  }
  if (scheduleTarget === 'Monday') {
    const objMonday = { Monday: generateObjAllDay().Monday };
    return objMonday;
  }
  return generateObjAllDay();
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
