function reverseString(str) {
  const str1 = str.split("").reverse().join("");
  return str1;
}

let mainstr = reverseString("irteja");
console.log(mainstr);

let str4 = "tanjim";
let rstr4 = [...str4].reverse().join("");
console.log(rstr4);
