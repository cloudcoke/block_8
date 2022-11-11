// const arr = ["경일", "게임", "아카데미"];
// let search = "게임";

// for (let i = 0; i < arr.length; i++) {
//   if (search !== arr[i]) {
//     console.log(arr[i]);
//   }
// }
// 고차 함수

function ingoo(str) {
  return function () {
    console.log(str);
    return "hello world!";
  };
}

const a = ingoo("hello"); // function, 함수 표현식
const b = a(); // 함수 호출
console.log(b);
