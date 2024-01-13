const daysId = "days";
const hoursId = "hours";
const minutesId = "minutes";
const secondsId = "seconds";

const millisecondsInASecond = 1000;
const millisecondsInAMinute = 60 * millisecondsInASecond;
const millisecondsInAnHour = millisecondsInAMinute * 60;
const millisecondsInADay = millisecondsInAnHour * 24;

const currentDate = new Date();
const cancunDate = new Date(2024, 5, 15);
let remainingMilliseconds = cancunDate - currentDate;

const remainingDays = Math.floor(remainingMilliseconds / millisecondsInADay);
remainingMilliseconds -= remainingDays * millisecondsInADay;
const remainingHours = Math.floor(remainingMilliseconds / millisecondsInAnHour);
remainingMilliseconds -= remainingHours * millisecondsInAnHour;
const remainingMinutes = Math.floor(remainingMilliseconds / millisecondsInAMinute);
remainingMilliseconds -= remainingMinutes * millisecondsInAMinute;
const remainingSeconds = Math.floor(remainingMilliseconds / millisecondsInASecond);

const daysSpan = document.getElementById(daysId);
const hoursSpan = document.getElementById(hoursId);
const minutesSpan = document.getElementById(minutesId);
const secondsSpan = document.getElementById(secondsId);

daysSpan.innerHTML = remainingDays.toString();
hoursSpan.innerHTML = remainingHours.toString();
minutesSpan.innerHTML = remainingMinutes.toString();
secondsSpan.innerHTML = remainingSeconds.toString();