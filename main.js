const randYear = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    let year = Math.floor(Math.random() * (max - min + 1) + min);

    return year; // => number
};

const randWeather = () => {
    let weather = {
        1: `Sunny`,
        2: `Raining`,
        3: `Foggy`,
        4: `Snowing`,
        5: `Cloudy`,
        6: `Hailing`,
        7: `Windy`,
        8: `Stormy`,
        9: `Chilly`,
        10: "Blazing hot",
    };

    let i = Math.floor(Math.random() * Object.keys(weather).length);

    return weather[i]; // => string
};

const randMonth = () => {
    let months = {
        1: `January`,
        2: `February`,
        3: `March`,
        4: `April`,
        5: `May`,
        6: `June`,
        7: `July`,
        8: `August`,
        9: `September`,
        10: `October`,
        11: `November`,
        12: `December`,
    };

    let i = Math.ceil(Math.random() * Object.keys(months).length);

    return months[i]; // => string
};

const randDayNumber = () => {
    let dayNumber = Math.ceil(Math.random() * 30);

    return dayNumber; // => number
};

const getSeason = (month) => {
    let season;

    switch (month) {
        case `December`:
        case `January`:
        case `February`:
            season = `Winter`;
            break;
        case `March`:
        case `April`:
        case `May`:
            season = `Spring`;
            break;
        case `June`:
        case `July`:
        case `August`:
            season = `Summer`;
            break;
        case `September`:
        case `October`:
        case `November`:
            season = `Autumn`;
            break;
        default:
            season = `ERROR`;
    }

    return season; // => string
};

const dateFormat = (locale) => {
    let format = {
        us: `${month} ${day} ${year}`,
        eu: `${day} ${month}, ${year}`,
    };

    return format[locale]; // => string
};

const yearRange = (range) => {};

/*
const generateYearSet = (amount) => {
    let antiquityYear = -3000;
    let currentYear = new Date().getFullYear();

    let years = [];
    let i = 1;
    while (i <= amount) {
        years.push(randYear(antiquityYear, currentYear));
        i++;
    }

    return years; // => array of numbers
};

const exiguusYears = (years) => {
    let exiguus = years.map((year) => {
        if (year < 0) {
            return `${-year} B.C.`;
        } else {
            return `${year} A.D.`;
        }
    });

    // console.log(exiguus);
    return exiguus; // => array of strings
};

const secularYears = (years) => {
    let secular = years.map((year) => {
        if (year < 0) {
            return `${-year} B.C.E.`;
        } else {
            return `${year} C.E.`;
        }
    });

    // console.log(exiguus);
    return secular; // => array of strings
};

const getYear = (yearSet) => {
    let i = Math.round(Math.random() * yearSet.length);

    return yearSet[i]; // => string
};
*/

let year = randYear(1600, 2021);
let month = randMonth();
let day = randDayNumber();
let season = getSeason(month).toLowerCase();
let weather = randWeather().toLowerCase();
let format = dateFormat(`us`);

console.log(`It was a ${weather} ${season} day on ${format}.`);
