const main = document.getElementById("main");

const weather = ["Chilly", "Rainy", "Foggy", "Snowy", "Cloudy", "Windy", "Stormy", "Warm"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const partsOfDay = ["morning", "afternoon", "evening", "night"];
const regions = ["us", "eu"];

(function init() {
  const randomRegion = regions[Math.floor(Math.random() * regions.length)];
  getRandomMessage(randomRegion);
  document.addEventListener("keyup", getNewMessage, false);
})();

function getNewMessage(event) {
  /* */
  event.preventDefault();

  if (event.code === "Space") {
    /* */
    // https://css-tricks.com/restart-css-animation/#aa-update-another-javascript-method-to-restart-a-css-animation

    main.classList.remove("animate");
    void main.offsetWidth; // => trigger reflow
    main.classList.add("animate");

    const randomRegion = regions[Math.floor(Math.random() * regions.length)];

    getRandomMessage(randomRegion);
  }
}

function getRandomYear(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomWeather() {
  return weather[Math.floor(Math.random() * weather.length)];
}

function getRandomMonth() {
  return months[Math.floor(Math.random() * months.length)];
}

function getRandomDayNumber() {
  return Math.ceil(Math.random() * 31);
}

function getSeason(month) {
  if (["December", "January", "February"].includes(month)) {
    return "Winter";
  }
  if (["March", "April", "May"].includes(month)) {
    return "Spring";
  }
  if (["June", "July", "August"].includes(month)) {
    return "Summer";
  }

  return "Fall";
}

function getRandomPartOfDay() {
  return partsOfDay[Math.floor(Math.random() * partsOfDay.length)];
}

function getDateSuffix(dayNumber) {
  /* */
  // https://tinyurl.com/date-suffix

  return (
    {
      1: "st",
      2: "nd",
      3: "rd",
      21: "st",
      22: "nd",
      23: "rd",
      31: "st",
    }[dayNumber] || "th"
  );
}

function getRandomMessage(region) {
  let year = getRandomYear(1800, 2021);
  let month = getRandomMonth();
  let dayNumber = getRandomDayNumber();
  let suffix = getDateSuffix(dayNumber);
  let dayPart = getRandomPartOfDay();
  let season = getSeason(month).toLowerCase();
  let weather = getRandomWeather().toLowerCase();

  function dateFormat(locale) {
    let format = {
      us: `${month} ${dayNumber}${suffix}, ${year}`,
      eu: `${dayNumber} ${month} ${year}`,
    };

    return format[locale];
  }

  let date = dateFormat(region);

  main.textContent = `It was a ${weather} ${season} ${dayPart} on ${date}.`;
}
