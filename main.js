// console.log(`Hello world`);

const randYear = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    let year = Math.floor(Math.random() * (max - min + 1) + min);

    return year;
};

const randWeather = () => {
    let weather = {
        1: `Sunny`,
        2: `Raining`,
        3: `Foggy`,
        4: `Snowing`,
        5: `Cloudy`,
    };

    let i = Math.ceil(Math.random() * Object.keys(weather).length);

    return weather[i]; // => string
};

const randDayNumber = () => {
    let dayNumber = Math.ceil(Math.random() * 30);

    return dayNumber; // => number
};

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
            return `A.D. ${year}`;
        }
    });

    // console.log(exiguus);
    return exiguus; // => array of strings
};

const getYear = (yearSet) => {
    let i = Math.round(Math.random() * yearSet.length);

    return yearSet[i]; // => string
};
