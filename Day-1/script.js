// Reverse string function
function reverseString() {
  const input = document.getElementById("stringInput").value;
  const reversed = input.split("").reverse().join("");
  document.getElementById("reverseOutput").textContent =
    "Reversed: " + reversed;
}

// Filter even numbers function
function filterEvenNumbers() {
  const input = document.getElementById("numberInput").value;
  const numbers = input
    .split(",")
    .map((n) => parseInt(n.trim()))
    .filter((n) => !isNaN(n));
  const evens = numbers.filter((n) => n % 2 === 0);
  document.getElementById("evenOutput").textContent =
    "Even Numbers: " + evens.join(", ");
}
