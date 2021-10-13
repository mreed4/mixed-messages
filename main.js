// console.log(`Hello world`);

const randYear = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    let year = Math.floor(Math.random() * (max - min + 1) + min);

    return year;
};

const yearSet = (set) => {
    let antiquityYear = -3000;
    let currentYear = new Date().getFullYear();

    let years = [];
    let n = 1;
    while (n <= set) {
        years.push(randYear(antiquityYear, currentYear));
        n++;
    }

    let exiguus = years.map((year) => {
        if (year < 0) {
            return `${-year} B.C.`;
        } else {
            return `A.D. ${year}`;
        }
    });

    // console.log(exiguus);
    return exiguus;
};

const quoteYear = (years) => {
    let i = Math.round(Math.random() * years.length);

    return years[i];
};

let set30 = yearSet(30);

let year = quoteYear(set30);

console.log(year);

const quoteSet = (set) => {};

const generateFakeQuote = () => {};
// yearSet(set);
