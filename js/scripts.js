const randYear = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    let year = Math.floor(Math.random() * (max - min + 1) + min);

    return year; // => number
};

const randWeather = () => {
    let weather = {
        1: `Chilly`,
        2: `Rainy`,
        3: `Foggy`,
        4: `Snowy`,
        5: `Cloudy`,
        6: `Windy`,
        7: `Stormy`,
        8: `Chilly`,
        9: `Warm`,
    };

    let i = Math.ceil(Math.random() * Object.keys(weather).length);

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

const randDayNumber = (month) => {
    let dayNumber = Math.ceil(Math.random() * 31);

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

const randPartOfDay = () => {
    let partOfDay = {
        1: `morning`,
        2: `afternoon`,
        3: `evening`,
        4: `night`,
    };

    let i = Math.ceil(Math.random() * Object.keys(partOfDay).length);

    return partOfDay[i]; // => string
};

const dateSuffix = (date, bool = false) => {
    // https://tinyurl.com/date-suffix
    if (bool === true) {
        let suffix = {
            1: `st`,
            2: `nd`,
            3: `rd`,
            21: `st`,
            22: `nd`,
            23: `rd`,
            31: `st`,
        };
        return suffix[date] || `th`; // => string
    } else {
        return ``; // => string (empty)
    }
};

const randMessage = () => {
    let year = randYear(1800, 2021); // Dont enter negative numbers here
    let month = randMonth();
    let day = randDayNumber();
    let suffix = dateSuffix(day, true);

    let dayPart = randPartOfDay();
    let season = getSeason(month).toLowerCase();
    let weather = randWeather().toLowerCase();

    const dateFormat = (locale) => {
        let format = {
            us: `${month} ${day}${suffix}, ${year}`,
            eu: `${day} ${month} ${year}`,
        };

        return format[locale]; // => string
    };

    let date = dateFormat(`eu`);

    return `It was a ${weather} ${season} ${dayPart} on ${date}.`;
};

let message = randMessage();

document.getElementById(`main`).textContent = message;

// console.log(message);

// return message;
