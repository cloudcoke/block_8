const gnb = document.querySelector("#gnb"); // 하나 선택

const list = document.querySelectorAll("#gnb > li"); // 복수 선택

const gnb2 = document.getElementById("gnb");
const list2 = gnb2.getElementsByTagName("li");

console.log(gnb);
console.log(list);
console.log(list2);

const arr = [{ name: "ingoo" }, { name: "ingoo2" }, { name: "ingoo3" }];

// arr 변수에서부터 ingoo3을 출력하세요
console.log(arr[2]["name"]);
console.log(arr[2].name);

// #gnb > li:nth-child(2) => hello world!
list[1].innerHTML = "hello wolrd!";

// for (let i = 0; i < list.length; i++) {
//   console.log(i);
//   console.log(list[i]);
// }
