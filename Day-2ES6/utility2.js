
export function arrfilter(arr, value) {
  return arr.filter(num => num > value);
}

export function sortarr(arr, type = "asc") {
  return arr.sort((a, b) => type === "asc" ? a - b : b - a);
}

// Double all numbers
export function doubleNumbers(arr) {
  return arr.map(num => num * 2);
}

// Add all numbers together
export function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

// Find first even number
export function findEven(arr) {
  return arr.find(num => num % 2 === 0);
}

// Remove duplicate numbers
export function removeDuplicates(arr) {
  return [...new Set(arr)];
}
