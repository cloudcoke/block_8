//
//                   6  7
//               5      6
//             2        5
//          1           2

// 정렬

// let arr2 = [4, 1, 6, 8, 2];

// function sorting(arr) {
//   let swap;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = swap;
//       }
//     }
//   }
//   return arr;
// }

// console.log(sorting(arr2));
// const btn = document.querySelector(".btn");

// btn.onclick = function (e) {
//   console.log(e);
// };

const btn = document.querySelector(".btn");
const display = document.querySelector(".display");

const btnHandler = function (e) {
  if (e.type === "click") display.innerHTML = "마우스를 클릭했다!";
  if (e.type === "mouseover") display.innerHTML = "마우스를 올렸다!";
};

btn.addEventListener("click", btnHandler);
btn.addEventListener("mouseover", btnHandler);
