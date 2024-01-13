const countId = "count";
const secondsInADay = 60 * 60 * 24;

const currentDate = new Date();
const cancunDate = new Date(2024, 5, 15);
const remainingDays = (cancunDate - currentDate) / secondsInADay / 1000;

const countSpan = document.getElementById(countId);
// concatenate remaining days

countSpan.innerHTML = Math.floor(remainingDays).toString();