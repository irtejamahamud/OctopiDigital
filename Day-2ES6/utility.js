export const arrfilter = (arr, val) => arr.filter((num) => num > val);

export const doublearr = (arr) => arr.map((num) => {
    console.log("Print: ", num);
    return num * 2;
});

export const findval = (arr) => arr.find((num) => num % 2 === 0);

export const sumarray = (arr) => arr.reduce((total, num) => total + num, 0);

export const multiarray = (arr) => arr.reduce((total, num) => total * num, 1);
