function returnInt(element) {
  return parseInt(element, 10);
}

console.log(["1", "2", "3"].map(returnInt));
console.log(["1", "2", "3"].map((str) => parseInt(str)));
console.log(["1", "2", "3"].map(Number));
