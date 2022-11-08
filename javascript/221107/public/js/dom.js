// console.log(this);
console.log(window);

// alert (경고창)
// window.alert("asd");
// const a = window.prompt("데이터주삼");
// console.log(a);

// console.log(window.console);
// setTimeout

// setInterval

// DOM
// console.log(window.document);

console.log(window.document);
const title = window.document.getElementById("title"); // return => HTMLElement
console.log(title);

title.innerHTML = "DOM에 오신걸 환영합니다!"; // 해당 영역 안쪽에 추가가 됨
// 자바스크립트로 html 조작함

// const obj = { name: "a" };

// console.log(obj);

// obj.name = "b";

// console.log(obj);

const sp = window.document.getElementsByTagName("span");
console.log(sp);

// const domTitle = document.getElementById("DOM-title");
// const spList = domTitle.getElementsByTagName("span");
// console.log(spList);
// console.log(spList.length);
// // 1. 0 ~ 2 까지 반복하는 for문 작성
// // 2. spList Element를 각각 출력
// for (let i = 0; i < spList.length; i++) {
//   //   console.log(spList[i]);
//   spList[i].innerHTML = `span1-${i + 1}`;
// }

const spList2 = document.getElementsByClassName("sp");
for (let i = 0; i < spList2.length; i++) {
  spList2[i].innerHTML = "span1-" + (i + 1);
}
