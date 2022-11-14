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
const btn2 = document.querySelector(".btn2");
const display = document.querySelector("#display");

function handler(e) {
  if (e.type === "click") {
    display.innerHTML = `${e.target.textContent} 클릭`;
    display.className = "a";
  } else if (e.type === "mouseover") {
    display.innerHTML = `${e.target.textContent}에 마우스를 올렸다!`;
    display.className = "b";
  }
}

function handler2(e) {
  display.innerHTML = "";
  display.className = "";
}

btn.addEventListener("click", handler);
btn.addEventListener("mouseover", handler);
btn.addEventListener("mouseout", handler2);
btn2.addEventListener("click", handler);
btn2.addEventListener("mouseover", handler);
btn2.addEventListener("mouseout", handler2);
