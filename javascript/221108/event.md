# Event

브라우저 렌더가 된 영역 기준
`click`
`mouseover` `mouseout`

특정 함수를 호출

```js
function a() {
  conose.log("hello world");
}

a();
```

이벤트를 배우는 목적

이벤트가 발생했을 때 함수를 호출하는 것

DOM
브라우저에서 이미 이벤트를 구현해 놓았음

이를 규칙에 맞게 사용하면 됨

**문법**

## 1. Element에 직접넣기

```html
<button onclick="alert('hello world!')">버튼</button>
```

- 버튼 클릭시 hello world 경고창이 실행됨
  속성명에 on이 붙는 것들은 대부분 이벤트임

on[Event 이름]

onClick
onMouseout
onMouseover

"" 안에 js 문법으로 넣어주면 됨

클릭이라는 이벤트가 발생했을에만 작동한다는 점이 중요
=> 클릭이벤트가 발동이 되어야 함수가 호출된다

## 2. DOM 속성으로 넣는 방법

1. JS로 해당 Element를 선택
2. 선택한 Element에 onclick 속성에 함수선언을 대입함

```js
const btn = document.querySelector(".btn"); // 참조 타입
console.log(btn);

btn.onclick = function () {
  console.log("hello world!");
};
```

querySelector로 엘리먼트를 선택하면 객체를 생성해서 가져다 주는게 아니라
해당 btn이라는 내용으로 객체 생성을 해줌
해당 엘리먼트를 선택하면 이미 만들어져 있는 주소값을 btn에 넣는다

```js
const btn = document.querySelector(".btn");
console.dir(btn);

btn.onclick = function () {
  console.log("hello world!");
};

const btn2 = document.querySelector(".btn");
console.dir(btn2);
```

기본으로 onclick이라는 속성에 null 값이 들어가는데
btn.onclick = f() {}로 값을 넣어주게 되어서
둘 다 확인을 해보면 onclick: f ()가 들어가게 된다

이벤트 삭제

```js
btn.onclick = null;
```

단점: btn에 함수를 두 개 넣고 싶은데

```js
const btn = document.querySelector(".btn");
console.dir(btn);

btn.onclick = function () {
  console.log("hello world!");
};

btn.onclick = function () {
  console.log("hello world!2");
};

const btn2 = document.querySelector(".btn");
console.dir(btn2);
```

hello world!2로 값이 변경이 되어버림

```js
const person = {
  name: "ingoo",
  run: function () {
    console.log(this.name + "달린다!");
  },
};

person.run();

person.run = function () {
  console.log(this.name + "걷는다");
};

person.run = function () {
  console.log(this.name + "달린다");
};
person.run();
```

위와 같다

## 3. addEventListener

1 ~ 3번 순서로 사용해왔다

속성에다가 함수값을 넣어버리면 함수를 하나밖에 못넣지 않나?
장점 - 해당 엘리먼트에다가 복수 이벤트를 넣을 수 있게 해줌

**문법**

```js
// event
// on click
//      mouseover
//      mouseout
// 실제 evnet를 넣는다 on을 빼도됨
element.addEventListener("event_name", 함수값(콜백함수), [options]);
```

```js
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("hello world!");
});

btn.addEventListener("click", function () {
  console.log("hello world2!");
});
```

함수가 두 개 들어가도 잘 작동한다

### 중요

메서드 생성 시 함수의 값을 넣어주어야 한다!!

```js
const person = {
  name: "ingoo",
  run: function () {
    console.log(this.name + "달린다!");
  },
};

function personRun() {}

person.run = personRun();

person.run();
```

위 코드 처럼 값을 넣어야 하는데 함수를 실행한 결과를 넣어버리면 안된다
Uncaught TypeError: person.run is not a function 오류가 나옴

addEventListener는 아마 이런 형태일 것이다

```js
function listener(event, callback) {
  if (event === "click") {
    callback();
  }
}

// listener("click", function () {
//   console.log("hello world!");
// });

function handler() {
  console.log("hello world!");
}

listener("click", handler);
```

### 3.1 이벤트 등록

형태 예시

```js
const btn = document.querySelector(".btn");

// 방법 1
const btnHandler = function () {
  console.log("hello world!");
};
btn.addEventListener("click", btnHandler);

// btn.addEventListener("click", function () {
//   console.log("hello world!");
// });

// 방법 2
btn.addEventListener("click", function () {
  console.log("hello world2!");
});
```

### 3.2 이벤트 삭제

함수를 선언하고 넣으면 좋은 이유는 이벤트 삭제할 때 편하다

```js
const btn = document.querySelector(".btn");

Element.removeEventListener(이벤트명:string, 함수값:fuction)
```

이 코드를 보면

```js
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("hello world1");
});
btn.addEventListener("click", function () {
  console.log("hello world2");
});

btn.removeEventListener("click", function () {
  console.log("hello world1");
});
```

지우려고 해도 지워지지 않는다
함수의 이름이 없어서 다른 값이 다
함수를 구분할 수 없어서 삭제할 수 없다
변수에 넣어주면 가능하다

```js
const btn = document.querySelector(".btn");

function handler() {
  console.log("hello world1");
}

function handler2() {
  console.log("hello world2");
}

// const handler3 = () => console.log("hello world3")

btn.addEventListener("click", handler);
btn.addEventListener("click", handler2);

btn.removeEventListener("click", handler);
```

위와 같이 작성해야 삭제가 잘 된다

같은 이벤트를 다른 곳에도 똑같이 적용할 때 유용하다
익명함수로 값을 넣는 것 보다
함수 표현식이나 함수 선언식으로 생성해 주는게 좋다

```js
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");

function handler() {
  console.log("hello world1");
}

function handler2() {
  console.log("hello world2");
}

btn.addEventListener("click", handler);
btn.addEventListener("click", handler2);
btn2.addEventListener("mouseover", handler2);

btn.removeEventListener("click", handler);
```

### 3.3 이벤트 객체

설명

```js
function listener(evnet, callback) {
  let obj = {
    name: "ingoo",
  };
  if (evnet === "click") {
    callback(obj);
  }
}

function handler3(e) {
  console.log(e);
  console.log("hello world!");
}

listener("click", handler3);
```

리스너라는 함수가 콜백함수에 인자값을 넘겨 줬다
누가 넘겨줬는지가 중요하다

```js
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");

function handler(e) {
  console.log(e);
  console.log("hello world1");
}

function handler2(e) {
  console.log(e);
  console.log("hello world2");
}

btn.addEventListener("click", handler);
btn.addEventListener("click", handler2);
btn2.addEventListener("mouseover", handler2);

btn.removeEventListener("click", handler);
```

addEventListner가 함수가 handler라는 함수를 호출 시킬때 특정 값을 넣어준다

반환
PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
MouseEvent {isTrusted: true, screenX: 91, screenY: 122, clientX: 91, clientY: 51, …}

이벤트 객체에서 target 객체는
이벤트를 발동시킨 엘리먼트를 말함

```js
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");

function handler(e) {
  console.log(e.target);
  console.log("hello world1");
}

function handler2(e) {
  console.log(e.target);
  console.log("hello world2");
}

btn.addEventListener("click", handler);
btn.addEventListener("click", handler2);
btn2.addEventListener("mouseover", handler2);

btn.removeEventListener("click", handler);
```

```js
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");

function handler(e) {
  console.log(e.target);
  console.log("hello world1");
}

function handler2(e) {
  console.log(e.target);
  console.log("hello world2");
}

btn.addEventListener("click", handler);
btn2.addEventListener("mouseover", handler);
```

버튼 클릭시
<button class="btn">버튼</button>

버튼2 마우스 호버시
<button class="btn2">버튼2</button>
e.target은 누가 실행 시켰는지를 알려준다
누구에 의해서 handler가 호출이 됬는지 알려준다

```js

```

type

```js
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");

function handler(e) {
  console.log(e.target);
  console.log(e.type);
  console.log("hello world1");
}

function handler2(e) {
  console.log(e.target);
  console.log("hello world2");
}

btn.addEventListener("click", handler);
btn2.addEventListener("mouseover", handler);
```

이벤트 명을 출력

click
mouseover

```html
<body>
  <div id="display" style="background: red">1</div>
  <button class="btn">버튼</button>
  <button class="btn2">버튼2</button>
  <script src="public/js/index.js"></script>
</body>
```

```js
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const display = document.querySelector("#display");

function handler(e) {
  console.log(e.target);
  console.log(e.type);
  console.log("hello world1");
  display.innerHTML = "이벤트발동!";
}

function handler2(e) {
  console.log(e.target);
  console.log("hello world2");
}

btn.addEventListener("click", handler);
btn2.addEventListener("mouseover", handler);
```

```js
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const display = document.querySelector("#display");

function handler(e) {
  console.log(e.target);
  console.log(e.type);
  console.log("hello world1");
  if (e.type === "click") {
    display.innerHTML = "마우스를 클릭했다!";
  } else if (e.type === "mouseover") {
    display.innerHTML = "마우스를 올렸다!";
  }
}

function handler2(e) {
  console.log(e.target);
  console.log("hello world2");
}

btn.addEventListener("click", handler);
btn2.addEventListener("mouseover", handler);
```

모든 엘리먼트에 이벤트 등록이 가능하다

css style 변경

```html
<body>
  <div id="display" style="background: red">1</div>
  <button class="btn">버튼</button>
  <button class="btn2">버튼2</button>
  <script src="public/js/index.js"></script>
</body>
```

```js
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const display = document.querySelector("#display");

function handler(e) {
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

  e.target.style = "background:blue"; // 이미 선언된 style이 바뀜
}

display.addEventListener("click", handler2);
```

class name 변경

```html
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .a {
      background: red;
    }
    .b {
      background: blue;
    }
  </style>
</head>
<body>
  <div id="display" class="a" style="background: red">1</div>
  <button class="btn">버튼</button>
  <button class="btn2">버튼2</button>
  <script src="public/js/index.js"></script>
</body>
```

```js
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const display = document.querySelector("#display"); // element

function handler(e) {
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
  e.target.style = "display:none";
}

display.addEventListener("click", handler2);

display.className = "b";
```

클래스 이름이 b로 바뀜

```js
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const display = document.querySelector("#display"); // element

function handler(e) {
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
  e.target.style = "display:none";
}

display.addEventListener("click", handler2);

display.className = "b box"; // 띄어쓰기 주의
```

클래스 2개 이상 쓸때 띄어쓰기 주의

classList
이거는 이 뜻임

```js
const text = "b box";
const classList = text.split(" "); // [b, box]
```

그래서 b만 바꾸고 싶다면

```js
console.log(display.classList); // DOMTokenList(2) ['b', 'box', value: 'b box']
display.classList[0] = "a";
console.log(display.classList); // DOMTokenList(2) ['b', 'box', value: 'b box']
```

작동이 안됨

add라는 메서드와 remove라는 메서드를 사용해서 조작을 해야 함

add 메서드
배열의 push 메서드와 비슷

```js
console.log(display.classList); // DOMTokenList(2) ['b', 'box', value: 'b box']
display.classList.add("view");
console.log(display.classList); // ['b', 'box', 'view', value: 'b box view']
```

remove 메서드

```js
display.className = "b box";

console.log(display.classList); // DOMTokenList(2) ['b', 'box', value: 'b box']
display.classList.add("view");
display.classList.remove("box");
console.log(display.classList); // DOMTokenList(2) ['b', 'view', value: 'b view']
display.classList.remove("b");
console.log(display.classList); // DOMTokenList ['view', value: 'view']
```

```js
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const display = document.querySelector("#display"); // element

function handler(e) {
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
```

```js
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
```

#### 코드 작성 팁

탭(들여쓰기)이 적을 수록 가독성이 높다
