const daysId = "days";
const hoursId = "hours";
const minutesId = "minutes";
const secondsId = "seconds";

const millisecondsInASecond = 1000;
const millisecondsInAMinute = 60 * millisecondsInASecond;
const millisecondsInAnHour = millisecondsInAMinute * 60;
const millisecondsInADay = millisecondsInAnHour * 24;

const cancunDate= new Date(2024, 5, 15, 9, 55);

const daysSpan = document.getElementById(daysId);
const hoursSpan = document.getElementById(hoursId);
const minutesSpan = document.getElementById(minutesId);
const secondsSpan = document.getElementById(secondsId);

const spanLookup = {
    [daysId]: daysSpan,
    [hoursId]: hoursSpan,
    [minutesId]: minutesSpan,
    [secondsId]: secondsSpan
}

function setText(count, id) {
    const label = count === 1 ? id.slice(0, -1) : id;
    spanLookup[id].innerHTML = `${count} ${label}`;
}

function setHoursText(hours) {
    const label = hours === 1 ? "hour" : "hours";
}
function update() {
    const currentDate = new Date();

    let remainingMilliseconds = cancunDate - currentDate;

    const remainingDays = Math.floor(remainingMilliseconds / millisecondsInADay);
    remainingMilliseconds -= remainingDays * millisecondsInADay;
    const remainingHours = Math.floor(remainingMilliseconds / millisecondsInAnHour);
    remainingMilliseconds -= remainingHours * millisecondsInAnHour;
    const remainingMinutes = Math.floor(remainingMilliseconds / millisecondsInAMinute);
    remainingMilliseconds -= remainingMinutes * millisecondsInAMinute;
    const remainingSeconds = Math.floor(remainingMilliseconds / millisecondsInASecond);

    setText(remainingDays, daysId);
    setText(remainingHours, hoursId);
    setText(remainingMinutes, minutesId);
    setText(remainingSeconds, secondsId);
}

update();
setInterval(update, 1000);
