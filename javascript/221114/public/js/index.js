// class를 달 Element
// mouseOver 할 Element

const gbnElement = document.querySelector("#gnb");
const gnbs = document.querySelectorAll("#gnb > li");
const header = document.querySelector("#header");

for (let i = 0; i < gnbs.length; i++) {
  gnbs[i].addEventListener("mouseover", function () {
    gbnElement.classList.add("on"); // setter
  });
}

// gbnElement.addEventListener("mouseover", function (e) {
//   console.log("aaa");
//   gbnElement.classList.add("on");
// });

// gbnElement.addEventListener("mouseout", function (e) {
//   console.log(e.target);
//   if (e.target.id === "gnb") {
//     gbnElement.classList.remove("on");
//   }
// });

header.addEventListener("mouseout", function (e) {
  if (e.target.id === "gnb") {
    gbnElement.classList.remove("on");
  }
});
