# DOM(Document Object Model)

Document => 문서 => HTML

자바스크립트로 HTML을 조작

> Javascript로 HTML을 조작하는 기능을 `브라우저`가 구현한 것

브라우저의 기능

HTML과 CSS를 해석하는 기능

Javascript를 해석하는 기능

브라우저가 javascript를 가지고 브라우저를 조작하거나 화면을 렌더되는 영역을

조작하는 걸 만들어 놓은 것 => DOM

HTML 혹은 CSS를 조작할 수 있는 기능 => DOM

BOM => 브라우저를 뒤로가게 하거나, url을 변경, 브라우저의 데이터를 저장(쿠키)

Browser Object Model

DOM => 렌더

BOM => 브라우저

DOM, BOM은 브라우저가 만들어준 것 => 크롬, 사파리, 엣지, 웨일 등

그래서 브라우저마다 DOM 기능이 되는곳이 있고 안되는 곳이 있다

자바스크립트 표준이 아님

DOM,BOM 두 개를 통틀어서 말하는 것 => WEB APIs

Web API
=> javascript로 브라우저 조작하는 걸 만듬

- DOM : Document Object Model
- BOM : Browser Object Model

API (Application Programming Interface)

Interface => 리모콘, 자판기, 키보드, 마우스 등등

예를 들어 컴퓨터라면 키보드, 마우스 처럼 입력 장치?

자판기의 선택 버튼들?

기계를 조작할 수 있겠금 조작하는 기능을 만드는 행위?

대부분 메서드를 호출

객체를 잘 다뤄야 함

함수를 잘 알아야 함

console.log만 실행했을 때는 아래와 같이 즉시함수로 감싸서 실행을 해준다

```js
(function () {
  console.log("hello world!");
})();
```

자바스크립트 브라우저 실행시 window객체를 제공해 줌

암묵적으로 let window라는 것이 있다고 볼 수 있음

```js
console.log(this);
console.log(window);

console.log(this === window); // true
```

같은 객체를 바라보고 있다

브라우저라면 익명함수를 만들때 window 객체를 만들고 시작함

heap이라는 공간에 window가 생성되고 시작된다

this로 window로 접근시 문제가 있을 수 있음 (나중에 배움) this bind

windows 객체안에 많은 값들이 들어 있는데 자주 사욯하는 것만 배움

```js
// alert (경고창)
window.alert("경고!!!");
```

```js
const a = window.prompt("데이터주삼"); // string으로 받는다!!!
console.log(a);
```

console.log도 window객체 안에 있음
window객체 안에 console 객체 안에 log

```js
console.log(window.console);
```

window 객체안에 documnet 객체가 있는데 그 안에 있는 것들이 DOM임

```js
console.log(window.document);
```

컴퓨터의 동시 작업 병렬 처리

브라우저는 병렬 처리 기능이 뛰어나지 않음

브라우저에게 html 파일을 주면 html 파일을 파싱 (텍스트 가져옴)
그다음 그림을 그릴때 하나하나씩 처리(태그를 하나하나 읽음)
javascript를 만나면 javascript를 읽고 끝나면
그 다음 태그를 읽음

그래서 대부분 script태그를 body안쪽 하단에 넣음

```js
const title = window.document.getElementById("title"); // return => HTMLElement
console.log(title);
```

```js
const title = window.document.getElementById("title"); // return => HTMLElement
console.log(title);

// title이라는 변수는 객체
title.innerHTML = "DOM에 오신걸 환영합니다!"; // 해당 영역 안쪽에 추가가 됨
// 자바스크립트로 html 조작함
```

왜 console.log(title)이 먼저 동작하지 않을까?

```js
const title = window.document.getElementById("title"); // return => HTMLElement
console.log(title);

title.innerHTML = "DOM에 오신걸 환영합니다!"; // 해당 영역 안쪽에 추가가 됨
```

const title = window.document.getElementById("title");
이건 참조 형태로 메모리에 id가 title인 걸 참조형태로 가져오는 것
그래서 innerHTML이 먼저 실행되고 console.log가 동작하는 걸로 보임?
비동기를 배워야 이해함
비동기로 돌아가는 경우가 많다

아래는 순서대로 동작한다

```js
const obj = { name: "a" };

console.log(obj); // a

obj.name = "b";

console.log(obj); // b
```

일단 비동기 때문에 그렇다고 알고 있자

window 객체는 생략이 가능하다

```js
windows.console.log("a");
console.log("a");
```

DOM안에 있는 sapn을 선택하려면

```html
<body>
  <h1 id="title"></h1>
  <span>span2</span>
  <h2 id="DOM-title">
    DOM
    <span>span1</span>
    <span>span1</span>
    <span>span1</span>
  </h2>
  <script src="public/js/dom.js"></script>
</body>
```

```css
span {
}

#DOM-title > sapn {
}
```

```js
window.document.getElementsByTagName("span"); // 인자값으로 엘리먼트 명
//return은 배열이다
```

선택하고 싶은건 #DOM-title > sapn 인데 전체 span이 선택이 된다
아래와 같이 해주면 됨

```js
const domTitle = document.getElementById("DOM-title");
const spList = domTitle.getElementsByTagName("span");
console.log(spList);
```

```html
<body>
  <h1 id="title"></h1>
  <span>span2</span>
  <h2 id="DOM-title">
    DOM
    <span>span1</span>
    <span>span1</span>
    <span>span1</span>
  </h2>
  <script src="public/js/dom.js"></script>
</body>
```

```js
const domTitle = document.getElementById("DOM-title");
const spList = domTitle.getElementsByTagName("span");
console.log(spList);
console.log(spList.length);
// 1. 0 ~ 2 까지 반복하는 for문 작성
// 2. spList Element를 각각 출력
for (let i = 0; i < spList.length; i++) {
  //   console.log(spList[i]);
  spList[i].innerHTML = `span1-${i + 1}`;
}
```

class로 선택해서 변경

```html
<body>
  <h1 id="title"></h1>
  <span>span2</span>
  <h2 id="DOM-title">
    DOM
    <span class="sp">span1</span>
    <span class="sp">span1</span>
    <span class="sp">span1</span>
  </h2>
  <script src="public/js/dom.js"></script>
</body>
```

```js
const spList2 = document.getElementsByClassName("sp");
for (let i = 0; i < spList2.length; i++) {
  spList2[i].innerHTML = "span1-" + (i + 1);
}
```

# 정리

```js
console.log(this); // result : window ...
console.log(window);
console.log(this === window); // true

// this 바인딩
function aa() {
  this;
}
// 함수안에 있는 this랑은 다르다

// 함수밖에 있는 this랑 window는 같다
```

```js
// window
// - console.log()
// - alert()
// - prompt()

// # DOM

// window.document
// window는 생략이 가능하다.
console.log(document);
// 안에 나오는 메서드들을 사용할 줄 알면 된다.

getElementById();
getElementByTagName();
getElementByClassName();
//을 배웠다
```

# window.document.getElementById()

**복수선택이 안됨!**
getElementById(인자1)

인자1: string

```html
<div id="header"></div>
<div id="header"></div>
```

인자 1에 들어가는 값은 'header'
단 데이터 타입은 **string**이어야 한다.

## return

```js
document.getElementById("header2"); // null
const header = document.getElementById("header"); // Object
header.innerHTML = "Hello world!"; // 상단에 있는 header만 선택이 되고 아래는 안됨
```

# window.document.getElementByTagName()

**복수 선택이 됨**

문법
getElementTagName(인자1)

인자1: string

```js
const arr
```

## return

HTMLCollection => 유사 배열

```js
// Object[]
// 리턴은 배열인데 요소 내용들이 객체
```

### 번외

```js
// Object[] => 배열인데 안에 들어가는 값은 object
const arr = [{ name: 1 }, { name: 2 }, { name: 3 }];
// String[] => 배열인데 안에 들어가는 값은 string
const arr2 = ["string1", "string2", "string3"];
// Number[] => 배열인데 안에 들어가는 값은 number
const arr3 = [1, 2, 3];
```

# window.document.getElementsByClassName()

getElementsByClassName(인자1)

인자1: string

```html
<body>
  <h1>Logo</h1>
  <ul id="gnb">
    <li>menu1</li>
    <li>menu1</li>
    <li>menu1</li>
    <li>menu1</li>
  </ul>
  <script src="public/js/dom2.js"></script>
</body>
```

```js
const gnb = document.querySelector("#gnb"); // 하나 선택

const list = document.querySelectorAll("#gnb > li"); // 복수 선택
// NodeList로 반환

const gnb2 = document.getElementById("gnb");
const list2 = gnb2.getElementsByTagName("li");
// HTMLCollection으로 반환

console.log(gnb);
console.log(list);
console.log(list2);
```

```js
const arr = [{ name: "ingoo" }, { name: "ingoo2" }, { name: "ingoo3" }];

// arr 변수에서부터 ingoo3을 출력하세요
console.log(arr[2]["name"]);
console.log(arr[2].name);
```

# querySelector()

볃교 => query (query치기 힘들때 기억!)

# querySelectorAll()
