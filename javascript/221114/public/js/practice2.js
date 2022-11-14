// const slide = document.querySelector("#visual > #slide");
// let count = 2;
// const changeSlide = setInterval(function () {
//   slide.className = `on${count}`;
//   if (count++ === 3) count = 1;
// }, 2000);

const btnList = document.querySelectorAll("#btn_container > button");

// function btnHandler(index) {
//     return function (e) {
//         if (e.type)
//     }
// }

for (let i = 0; i < btnList.length; i++) {
  btnList[i].addEventListener("click", btnHandler(i));
}
