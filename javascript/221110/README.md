# setTimeout, setInterval

# DOM x

```js
window.setTimeout;
```

브라우저가 만들어 놓은 메서드
브라우저가 제공하는 기능

1
1초뒤에 2
3
나오게 하고 싶을 때

**문법**

```js
window.setTimeout(callback, millisecond);

window.setTimeout(callback, 1000) // 1초뒤에 callback 함수를 실행한다는 뜻
callback :function => 실행할 함수
1000 : number => 시간
```

```js
window.setInterval(callback, 1000)
callback : function => 실행할 함수
1000 : number => 시간
```

window는 생략이 가능해서 자바스크립트가 기본적으로 제공하는 함수 인줄 알 수 있는데
자바스크립트가 기본적으로 가지고 있는 함수가 아니다!

```js
console.log("hello world!");
setTimeout(function () {
  console.log(1);
}, 5000);

setInterval(function () {
  console.log(2);
}, 1000);
```

5초뒤에 1이 출력된다
2는 계속 찍힘

setTimout은 한번만 찍히고
setInterval은 계속 찍힘

## setTimeout

2번째 인자값인 number 즉 밀리세컨드가 충족되었을때
**딱 한번만** 실행함

## setInterval

2번째 인자값인 number 즉 밀리세컨드가 충족되었을때
**마다** 실행함

만약 1
1초쉬고 2
3
을 출력하고 싶다

```js
console.log("1");
setTimeout(function () {
  console.log(2);
}, 1000);
console.log(3);
```

결과가
1
3
2가 나온다
왜냐하면 자바스크립트는 싱글스레드이기 때문이다

### 싱글스레드

프로그램을 해석하는 사람이 한명이다

예) 메가커피

콜스택이 코드를 해석해 주는 애
이게 하나뿐이다

setTimeout이 여러개가 있다면 콜스택으로 설명할 수 없다
자바스크립트는 싱글스레드이기 때문에
브라우저가 백그라운드라는 공간을 하나 더 만들어 놓았다
webAPI

태스크 큐
=> 백그라운드 중에서 콜백함수들을 넘겨주는 역할

백그라운드에서 setTimeout에 설정된 시간이 되면
콜백함수를 넘겨준다

태스크 큐는 콜스택을 바라봄

1. 백그라운드에 setTimeout 들어감
2. 시간이 되면 태스크 큐에 콜백함수를 넘겨줌
3. 태스크 큐에서 콜스택으로 넘겨줌
4. 실행됨

이뜻은 코드를 해석하는 사람이 두명이라는 뜻

콜스택에서 처리되는 걸 동기
백그라운드에서 처리되는 걸 비동기
라고 부르면 됨

### 동기와 비동기

한 작업이 완벽하게 끝나야지만 다음 작업을 하는 걸 동기

부모님께서 다음과 같은 심부름을 시킨다고 가정

1. 빨래돌리고
2. 빨래널고
3. 정육점가서 소고기 사와

동기식 처리

1. 빨래 돌리고
2. 빨래 널고
3. 정육점가서 소고기 사옴

비동기식 처리

1. 빨래 돌리고
2. 정육점가서 소고기 사옴
3. 빨래 널고

# setTimeout

비동기

태스크 큐는 선입 선출
태스크 큐는 콜스택이 비어 있어야지만 태스크 큐에 있는 작업을 콜스택으로 옮김 => 이벤트 루프

우리가 컨트롤 할 수 있는 공간은 콜스택 하나이기 때문에 자바스크립트는 싱글쓰레드다
백그라운드는 우리가 컨트롤 할 수 없음

비동기를 동기 치럼 코드를 짜는게 어려움

```js
// 빨래돌리고 10초
// 빨래널고 5초
// 정육점가서 소고기 사와 30초

// 빨래 돌리고
// 소고기
// 빨래를 널기

// 빨래돌리기
setTimeout(function () {
  console.log("세탁기 완료");
}, 10 * 1000);

setTimeout(function () {
  console.log("빨래 널기");
}, 5 * 1000);

setTimeout(function () {
  console.log("소고기 사오기");
}, 30 * 1000);
```

=> 빨래 널기
세탁기 완료
소고기 사오기
순으로 나옴

완료가 되는 시점을 알아서 코드를 잘 작성해야 함

```js
setTimeout(function () {
  console.log("세탁기 완료");

  setTimeout(function () {
    console.log("빨래 널기");
  }, 5 * 1000);
}, 10 * 1000);

setTimeout(function () {
  console.log("소고기 사오기");
}, 30 * 1000);
```

=> 세탁기 완료
빨래 널기
소고기 사오기
순으로 나옴

백그라운드 안에 있는 코드는 조작을 하려면
백그라운드로 들어가는 코드안에 넣어줘야 함

비동기 코드를 동기적으로 처리하려면
비동기 코드 안에 또 비동기 코드를 넣어줘야 함

callback hell

```js
console.log("시작");
setTimeout(function () {
  console.log("세탁기 돌림");
  setTimeout(function () {
    console.log("세탁기 종료");
    setTimeout(function () {
      console.log("빨래 널기");
      console.log("끝");
    });
  }, 5000);

  setTimeout(function () {
    console.log("소고기 사오기");
  }, 3000);
}, 1000);
```

setTimeout 한 번 사용되면 소멸된다
=> 괄호가 벗겨진다라고 볼 수 있음
setTimeout에 시간을 넣지 않아도 무조건 백그라운드로 처리가 됨

window에서 생성된 함수들은 대부분 백그라운드로 처리가 된다? 확인필요

```js
console.log(1);
setTimeout(function () {
  console.log(2);
}, 0);
console.log(3);
```

1 2 3이 찍힐거라 생각되지만
1 3 2가 찍힘
=> 콜스택이 비어있어야 실행되기 때문에
중요 setTimeout은 백그라운드로 들어간다

setTimeout에서 많이 하는 실수

```js
console.log(1);
setTimeout(function () {
  let name = "ingoo";
  console.log(2);
}, 0);

console.log(name);
console.log(3);
```

백그라운드 코드 안에 있는
변수를 밖으로 빼거나

```js
let name;
console.log(1);
setTimeout(function () {
  name = "ingoo";
  console.log(2);
}, 0);

console.log(name); // 할당되지 전
```

전역에서 선언하고
안에서 사용하고 싶은 것

=> 안됨

비동기 안에서 변수를 사용하고 싶으면 비동기 안에서 선언해야 함

```js
console.log(1);
setTimeout(function () {
  let name;
  name = "ingoo";
  console.log(2);
  setTimeout(function () {
    console.log(name);
  });
}, 0);
```

```js
let name = "ingoo";
console.log(1);
setTimeout(function () {
  console.log(name);
}, 0);
```

```js
let num = 0;
setInterval(function () {
  console.log(++num);
}, 1000);
```

setInterval은 다음과 같은 상황에서 많이 사용

```js
let num = 0;
setInterval(function () {
  console.log(num++);
  if (num === 5) num = 0;
}, 1000);
```

clearInterval()

종료를 하고 싶으면 변수를 하나를 받아야 함
setInterval은 어떤 숫자를 반환하는데
그 값을 이용해야함

```js
let num = 0;
const tiemId = setInterval(function () {
  console.log(num++);
  if (num === 5) clearInterval(tiemId);
}, 1000);
```

백그라운드에 있던 인터벌이 소멸됨

종료하고 싶은 인터벌이 무엇인지 전달해 주어야 함
clearInterval(종료할 인터벌)

```js
setTimeout(
  function (name) {
    console.log(name);
  },
  1000,
  "ingoo"
);
```

3번째 인자는 name이라는 매개변수에 들어감

### Event Loop

중요
프로미스 객체와
async/await
를 배울때 중요함

# setInterval을 활용하여 visual 만들기

setInterval을 활용하여 1초마다 on을 옮겨주자

Element.className

setInterval을 사용할때
매초마다 실행되는데

처음돌때 - 첫번째 엘리먼트
두번째돌때 - 두번째 엘리먼트
세번째돌때 - 세번째 엘리먼트
네번째돌때 - 네번째 엘리먼트
다섯번째돌때 - 다섯번째 엘리먼트

```js
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const e = document.querySelector(".e");

let count = 0;
setInterval(function () {
  if (count === 0) {
    a.classList.add("on");
    b.classList.remove("on");
    c.classList.remove("on");
    d.classList.remove("on");
    e.classList.remove("on");
  } else if (count === 1) {
    a.classList.remove("on");
    b.classList.add("on");
    c.classList.remove("on");
    d.classList.remove("on");
    e.classList.remove("on");
  } else if (count === 2) {
    a.classList.remove("on");
    b.classList.remove("on");
    c.classList.add("on");
    d.classList.remove("on");
    e.classList.remove("on");
  } else if (count === 3) {
    a.classList.remove("on");
    b.classList.remove("on");
    c.classList.remove("on");
    d.classList.add("on");
    e.classList.remove("on");
  } else {
    a.classList.remove("on");
    b.classList.remove("on");
    c.classList.remove("on");
    d.classList.remove("on");
    e.classList.add("on");
  }
  if (++count === 5) count = 0;
}, 3000);
```

수정

```js
const elements = document.querySelectorAll("#visual > li");

let count = 1;
const intervalId = setInterval(function () {
  for (let i = 0; i < elements.length; i++) {
    if (i === count) elements[i].classList.add("on");
    else elements[i].classList.remove("on");
  }

  if (++count === 5) count = 0;
}, 3000);
```

내가 짠 코드

```html
<body>
  <ul id="visual">
    <li class="a on">1</li>
    <li class="b">2</li>
    <li class="c">3</li>
    <li class="d">4</li>
    <li class="e">5</li>
  </ul>
  <script src="public/js/practice.js"></script>
</body>
```

```js
const liList = document.querySelectorAll("#visual > li");
let count = 0;

setInterval(function () {
  liList[count].classList.remove("on");
  if (count++ === 4) count = 0;
  liList[count].classList.add("on");
```

// 연습문제
// lotto
// 회원가입 cr
// visual -> radio box

// radio box
// [O] [X] [X] [X] [X]
// [X] [O] [X] [X] [X]
// [X] [X] [O] [X] [X]
// [X] [X] [X] [O] [X]
// [X] [X] [X] [X] [O]

```js
arr[0] = "O";
console.log(arr);
arr[0] = "X";
arr[1] = "O";
console.log(arr);
arr[1] = "X";
arr[2] = "O";
console.log(arr);
```

```js

for (let i = 0; i < arr.length; i++) {
  if (i !== 0) arr[i - 1] = "X";
  arr[i] = "O";
  console.log(arr);
```

// check box

일단 구현이 중요
그다음에 다듬으면 됨
