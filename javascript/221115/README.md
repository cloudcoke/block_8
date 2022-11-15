# Counter 예제

처음에는 0 나와야 함
`+` 버튼 만들어야 함
`-` 버튼 만들어야 함

`+` 버튼 누르면 1씩 증가 - 클릭 이벤트
`-` 버튼 누르면 1씩 감소 - 클릭 이벤트
0일때 `-` 버튼 누르면 팝업창 띄우기

1. 화면 그리기
2. 어떻게 코드를 구현할지 고민
3. 입력값이 무엇인지 살펴봄

** 첫번째 형태 **

```js
const display = document.querySelector("#counter");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");

let num = 0;
display.innerHTML = num;

function plusHandler() {
  display.innerHTML = ++num;
}

function minusHandler() {
  display.innerHTML = --num;
}

incrementBtn.addEventListener("click", plusHandler);
decrementBtn.addEventListener("click", minusHandler);
```

```js
const display = document.querySelector("#counter");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");

let num = 0;
display.innerHTML = num;

function handler(e) {
  display.innerHTML = e.target.id === "increment" ? ++num : --num;
}
incrementBtn.addEventListener("click", handler);
decrementBtn.addEventListener("click", handler);
```
