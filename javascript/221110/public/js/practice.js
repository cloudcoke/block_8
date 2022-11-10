const liList = document.querySelectorAll("#visual > li");
let count = 0;

setInterval(function () {
  liList[count].classList.remove("on");
  if (count++ === 4) count = 0;
  liList[count].classList.add("on");
}, 1000);

// count = 0
// count++
// count = 1

// count = 1
// count++
// count = 2

// count = 2
// count++
// count = 3

// count = 3
// count++
// count = 4

// count = 4
// count++
// count = 0
