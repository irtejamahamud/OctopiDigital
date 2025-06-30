const map1 = new Map();

map1.set("a",1);
map1.set("b",2);

console.log(map1.get("b"));
map1.set("b",97);

console.log(map1.size);
console.log(map1.get("b"));