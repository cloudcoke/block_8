const btn = document.querySelector(".btn");

const event1 = function () {
  console.log("hello world!");
};
const event2 = function () {
  console.log("hello world2!");
};

btn.addEventListener("click", event1);
btn.addEventListener("click", event2());
