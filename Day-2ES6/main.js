import {
  arrfilter,
  sortarr,
  doubleNumbers,
  sumArray,
  findEven,
  removeDuplicates,
} from "./utility2.js";

const numbers = [10, 20, 30, 10, 50, 20];

console.log("Original:", numbers);

const filtered = arrfilter(numbers, 15);
console.log(filtered);

console.log("Sorted ASC:", sortarr(numbers, "asc"));
console.log("Sorted DESC:", sortarr([...numbers], "desc"));
console.log("Doubled:", doubleNumbers(numbers));
console.log("Sum:", sumArray(numbers));
console.log("First Even:", findEven(numbers));
console.log("No Duplicates:", removeDuplicates(numbers));
