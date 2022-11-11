let count = 0;
let intervalId = 0;

function init() {
  const imgs = document.querySelectorAll("#visual > li");
  const btns = document.querySelectorAll("#visualBtn > button");
  const preBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  function findIndex() {
    for (let i = 0; i < imgs.length; i++) {
      if (imgs[i].getAttribute("class") === "on") return i;
    }
  }

  function slide() {
    imgs[count].className = "";
    if (++count === 3) count = 0;
    imgs[count].className = "on";
  }

  function btnHandler(index) {
    return function (e) {
      clearInterval(intervalId);
      const current = findIndex();

      imgs[current].className = "";
      imgs[index].className = "on";
      count = index;
      intervalId = setInterval(slide, 3000);
    };
  }

  function prevNextHandler(e) {
    // console.log(e.target.getAttribute("class") === "prev");
    clearInterval(intervalId);
    const current = findIndex();
    let index = 0;
    if (e.target.getAttribute("class") === "prev") {
      if (current === 0) {
        index = imgs.length - 1;
      } else {
        index = current - 1;
      }
    } else {
      if (current === imgs.length - 1) {
        index = 0;
      } else {
        index = current + 1;
      }
    }

    imgs[current].className = "";
    imgs[index].className = "on";
    count = index;
    intervalId = setInterval(slide, 3000);
  }

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", btnHandler(i));
  }
  preBtn.addEventListener("click", prevNextHandler);
  nextBtn.addEventListener("click", prevNextHandler);

  imgs[0].className = "on";
  intervalId = setInterval(slide, 3000);
}

document.addEventListener("DOMContentLoaded", init);
