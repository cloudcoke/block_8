const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const display = document.querySelector("#display"); // element

function handler(e) {
  display.classList.remove("none");
  if (e.type === "click") {
    display.innerHTML = "마우스를 클릭했다!";
  } else if (e.type === "mouseover") {
    display.innerHTML = "마우스를 올렸다!";
  }
}

btn.addEventListener("click", handler);
btn2.addEventListener("mouseover", handler);

// event object : object
function handler2(e) {
  // e.target : Element(객체이지만 내용이 element 내용만 가지고 있음)
  console.log(e.target);
  //   e.target.style = "display:none";
  e.target.classList.add("none");
}

display.addEventListener("click", handler2);
