// console.log(`Hello world`);

const randYear = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    let year = Math.floor(Math.random() * (max - min + 1) + min);

    return year;
};

const yearSet = (set) => {
    let ancientYear = -3000;
    let currentYear = new Date().getFullYear();

    let years = [];
    let n = 1;

    while (n <= set) {
        years.push(randYear(ancientYear, currentYear));
        n++;
    }

    let exiguus = years.map((n) => {
        if (n < 0) {
            return `${-n} B.C.`;
        } else {
            return `A.D. ${n}`;
        }
    });

    console.log(exiguus);
};

yearSet(30);
