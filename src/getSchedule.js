const data = require('../data/zoo_data');

const { species } = data;
const week = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

function generateObjAllDay() {
  const allAnimalTuesday = species.filter((element) => element.availability.includes('Tuesday'));
  const allAnimalWednesday = species.filter((element) =>
    element.availability.includes('Wednesday'));
  const allAnimalThursday = species.filter((element) => element.availability.includes('Thursday'));
  const allAnimalFriday = species.filter((element) => element.availability.includes('Friday'));
  const allAnimalSaturday = species.filter((element) => element.availability.includes('Saturday'));
  const allAnimalSunday = species.filter((element) => element.availability.includes('Sunday'));
  const allAnimalMonday = species.filter((element) => element.availability.includes('Monday'));
  const animalObj = {
    Tuesday: { officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`, exhibition: allAnimalTuesday.map((nameAnimal) => nameAnimal.name) },
    Wednesday: { officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`, exhibition: allAnimalWednesday.map((nameAnimal) => nameAnimal.name) },
    Thursday: { officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`, exhibition: allAnimalThursday.map((nameAnimal) => nameAnimal.name) },
    Friday: { officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`, exhibition: allAnimalFriday.map((nameAnimal) => nameAnimal.name) },
    Saturday: { officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`, exhibition: allAnimalSaturday.map((nameAnimal) => nameAnimal.name) },
    Sunday: { officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`, exhibition: allAnimalSunday.map((nameAnimal) => nameAnimal.name) },
    Monday: { officeHour: `Open from ${data.hours.Monday.open}am until ${data.hours.Monday.close}pm`, exhibition: allAnimalMonday.map((nameAnimal) => nameAnimal.name) },
  };
  return animalObj;
}

function getSchedule(scheduleTarget) {
  if (data.species.some((nameAnimal) => nameAnimal.name.includes(scheduleTarget))) {
    const findAnimal = data.species.filter((nameAnimal) =>
      nameAnimal.name.includes(scheduleTarget));
    return findAnimal.map((days) => days.availability)[0];
  }
  if (week.includes(scheduleTarget)) {
    const objAll = generateObjAllDay();
    if (scheduleTarget === 'Tuesday') {
      return objAll.Tuesday;
    }
    if (scheduleTarget === 'Wednesday') {
      return objAll.Wednesday;
    }
    if (scheduleTarget === 'Thursday') {
      return objAll.Thursday;
    }
    if (scheduleTarget === 'Friday') {
      return objAll.Friday;
    }
    if (scheduleTarget === 'Saturday') {
      return objAll.Saturday;
    }
    if (scheduleTarget === 'Sunday') {
      return objAll.Sunday;
    }
    return objAll.Friday;
  }
  return generateObjAllDay();
}

console.log(getSchedule('Saturday'));

module.exports = getSchedule;
