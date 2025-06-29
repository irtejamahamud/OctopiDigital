function reverseString(str) {
  const str1 = str.split("").reverse().join("");
  return str1;
}

let mainstr = reverseString("irteja");
console.log(mainstr);

let str4 = "tanjim";
let rstr4 = [...str4].reverse().join("");
console.log(rstr4);

let a = 10;
let b = 20;

let sum = function (a, b) {
  return a + b; //function expression
};

let sum2 = (a, b) => a + b;

console.log(sum(a, b));
console.log(sum2(a, b));

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isEvenNumber(arr) {
  let evenNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenNum.push(arr[i]);
    }
  }
  return evenNum;
}

console.log(isEvenNumber(num));
