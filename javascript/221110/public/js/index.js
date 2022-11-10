// 빨래돌리고 10초
// 빨래널고 5초
// 정육점가서 소고기 사와 30초

// 빨래 돌리고
// 소고기
// 빨래를 널기

// 빨래돌리기
// setTimeout(function () {
//   console.log("세탁기 완료");

//   setTimeout(function () {
//     console.log("빨래 널기");
//   }, 5 * 1000);
// }, 10 * 1000);

// setTimeout(function () {
//   console.log("소고기 사오기");
// }, 30 * 1000);
// console.log("시작");
// setTimeout(function () {
//   console.log("세탁기 돌림");
//   setTimeout(function () {
//     console.log("세탁기 종료");
//     setTimeout(function () {
//       console.log("빨래 널기");
//       console.log("끝");
//     });
//   }, 5000);

//   setTimeout(function () {
//     console.log("소고기 사오기");
//   }, 3000);
// }, 1000);

// let name = "ingoo";
// console.log(1);
// setTimeout(function () {
//   console.log(name);
// }, 0);

// let num = 0;
// const tiemId = setInterval(function () {
//   console.log(num++);
//   if (num === 5) clearInterval(tiemId);
// }, 1000);

// setTimeout(
//   function (name) {
//     console.log(name);
//   },
//   1000,
//   "ingoo"
// );
const elements = document.querySelectorAll("#visual > li");

let count = 1;
const intervalId = setInterval(function () {
  for (let i = 0; i < elements.length; i++) {
    if (i === count) elements[i].classList.add("on");
    else elements[i].classList.remove("on");
  }

  if (++count === 5) count = 0;
}, 3000);

const arr = ["X", "X", "X", "X", "X"];
// [O] [X] [X] [X] [X]
// [X] [O] [X] [X] [X]
// [X] [X] [O] [X] [X]
// [X] [X] [X] [O] [X]
// [X] [X] [X] [X] [O]

// arr[0] = "O";
// console.log(arr);
// arr[0] = "X";
// arr[1] = "O";
// console.log(arr);
// arr[1] = "X";
// arr[2] = "O";
// console.log(arr);
for (let i = 0; i < arr.length; i++) {
  if (i !== 0) arr[i - 1] = "X";
  arr[i] = "O";
  console.log(arr);
}
