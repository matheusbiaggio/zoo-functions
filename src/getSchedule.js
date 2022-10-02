const data = require('../data/zoo_data');

// const { species } = data;
// const week = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
// const dh = data.hours;

// function generateObjAllDay() {
//   const allAnimalTuesday = species.filter((element) => element.availability.includes('Tuesday'));
//   const allAnimalWednesday = species.filter((element) =>
//     element.availability.includes('Wednesday'));
//   const allAnimalThursday = species.filter((element) => element.availability.includes('Thursday'));
//   const allAnimalFriday = species.filter((element) => element.availability.includes('Friday'));
//   const allAnimalSaturday = species.filter((element) => element.availability.includes('Saturday'));
//   const allAnimalSunday = species.filter((element) => element.availability.includes('Sunday'));
//   const allAnimalMonday = species.filter((element) => element.availability.includes('Monday'));
//   const animalObj = {
//     Tuesday: {
//       officeHour: `Open from ${dh.Tuesday.open}am until ${dh.Tuesday.close}pm`,
//       exhibition: allAnimalTuesday.map((nameAnimal) => nameAnimal.name) },
//     Wednesday: {
//       officeHour: `Open from ${dh.Wednesday.open}am until ${dh.Wednesday.close}pm`,
//       exhibition: allAnimalWednesday.map((nameAnimal) => nameAnimal.name) },
//     Thursday: {
//       officeHour: `Open from ${dh.Thursday.open}am until ${dh.Thursday.close}pm`,
//       exhibition: allAnimalThursday.map((nameAnimal) => nameAnimal.name) },
//     Friday: {
//       officeHour: `Open from ${dh.Friday.open}am until ${dh.Friday.close}pm`,
//       exhibition: allAnimalFriday.map((nameAnimal) => nameAnimal.name) },
//     Saturday: {
//       officeHour: `Open from ${dh.Saturday.open}am until ${dh.Saturday.close}pm`,
//       exhibition: allAnimalSaturday.map((nameAnimal) => nameAnimal.name) },
//     Sunday: {
//       officeHour: `Open from ${dh.Sunday.open}am until ${dh.Sunday.close}pm`,
//       exhibition: allAnimalSunday.map((nameAnimal) => nameAnimal.name) },
//     Monday: {
//       officeHour: `Open from ${dh.Monday.open}am until ${dh.Monday.close}pm`,
//       exhibition: allAnimalMonday.map((nameAnimal) => nameAnimal.name) },
//   };
//   return animalObj;
// }

// function getSchedule(scheduleTarget) {
//   if (data.species.some((nameAnimal) => nameAnimal.name.includes(scheduleTarget))) {
//     const findAnimal = data.species.filter((nameAnimal) =>
//       nameAnimal.name.includes(scheduleTarget));
//     return findAnimal.map((days) => days.availability)[0];
//   }
//   if (week.includes(scheduleTarget)) {
//     const objAll = generateObjAllDay();
//     if (scheduleTarget === 'Tuesday') {
//       return objAll.Tuesday;
//     }
//     if (scheduleTarget === 'Wednesday') {
//       return objAll.Wednesday;
//     }
//     if (scheduleTarget === 'Thursday') {
//       return objAll.Thursday;
//     }
//     if (scheduleTarget === 'Friday') {
//       return objAll.Friday;
//     }
//     if (scheduleTarget === 'Saturday') {
//       return objAll.Saturday;
//     }
//     if (scheduleTarget === 'Sunday') {
//       return objAll.Sunday;
//     }
//     return objAll.Friday;
//   }
//   return generateObjAllDay();
// }

// console.log(getSchedule());

// module.exports = getSchedule;
