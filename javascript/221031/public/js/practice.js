// * 연산
let string = "ryzen";
let num = 9;
let bool = true;

console.log(string * num); // NaN * 9 => NaN
console.log(string * bool); // NaN * 1 => NaN
console.log(num * bool); // 9 * 1 => 9
console.log(NaN * num); // NaN * 9 => NaN
console.log(undefined * num); // NaN * 9 => NaN
console.log(null * num); // 0 * 9 => -9
