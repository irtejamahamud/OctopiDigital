function sum(...num) {
  let s = 0;
  for (let x of num) {
    s += x;
  }
  return s;
}

console.log(sum(1, 2, 3, 4, 5));

function showDetails(name, age, ...skills) {
  console.log(name);
  console.log(age);
  console.log(skills);
}

showDetails("Irteja", 25, "JS", "Python", "React");