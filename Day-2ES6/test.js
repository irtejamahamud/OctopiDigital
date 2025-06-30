import {
  arrfilter,
  doublearr,
  findval,
  sumarray,
  multiarray,
} from "./utility.js";

const numbers = [10, 20, 30, 10, 50, 20];

console.log("Original Array:", numbers);

const filtered = arrfilter(numbers, 15);
console.log("Filtered (>15):", filtered);

const doubled = doublearr(numbers);
console.log("Doubled Array:", doubled);

const firstEven = findval(numbers);
console.log("First Even:", firstEven);

const totalSum = sumarray(numbers);
console.log("Sum of Array:", totalSum);

const totalProduct = multiarray(numbers);
console.log("Product of Array:", totalProduct);

