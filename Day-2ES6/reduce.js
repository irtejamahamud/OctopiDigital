//The reduce() method executes a callback function on each element of the array, resulting in a single


const num = [1, 2, 3, 4, 5];
const total = num.reduce((acc, curr) => acc + curr, 0);
console.log(total);
