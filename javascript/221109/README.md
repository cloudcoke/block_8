# lotto

- 코드를 줄이는 작업
- 중복값 제거
- 정렬

# Event

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="public/js/index.js"></script>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

위와 같이 script 태그를 작성하고

```js
const box = document.querySelector(".box");
console.log(box); // <div></div> = x => null
```

위 코드를 실행하면 null이 나온다

왜냐하면 html 코드를 읽을때 위에서부터 아래로 읽게 되는데
script 코드를 만나면 js 파일을 읽어들여 js 파일의 코드를 읽고 실행한 다음
다시 html 코드를 아래로 읽는다

그럼 html 파일을 다 읽고 js 파일을 실행할 수는 없을까?

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="public/js/index.js"></script>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

```js
const box = document.querySelector(".box");
console.log(box); // <div></div> = x => null

// Event
// DOMContentLoaded
function init() {
  console.log("hello world!");
}

document.addEventListener("DOMContentLoaded", init);
```

null과 hello world가 출력된다

!document 객체는 body 영역 전체를 말한다

html 파일을 다 읽었을때 실행된다

```js
// Event
// DOMContentLoaded
function init() {
  console.log("hello world!");
  const box = document.querySelector(".box");
  console.log(box); // <div></div> = x => null
}

document.addEventListener("DOMContentLoaded", init);
// document.addEventListener("click", init); // 가능
```

x
위와 같이 작성해주면 box의 요소가 나온다
html 로드가 끝나면 init 함수를 실행시켜라

```js
// HTML load가 되지 않은 상태에서 querySelector을 사용했기 때문에 Element|null
const box = document.querySelector(".box");
console.log(box); // null

// 브라우저가 로드가 끝나면 DOMContentLoaded 이벤트를 한번만 발동시킴
// Event
// DOMContentLoaded
function init() {
  console.log("hello world!");
  const box = document.querySelector(".box");
  console.log(box); // <div class="box"></div>
}

document.addEventListener("DOMContentLoaded", init);
// document.addEventListener("click", init); // 가능
```

html을 다 읽고 스크립트 코드를 다 읽고 난다음 이벤트를 발생시킬때
이벤트는 로드가 끝난 다음에 실행이 된다

브라우저가 끝났다는 신호를 주면

브라우저가 로드가 끝나면 DOMContentLoaded 이벤트를 한번만 발동시킴

호출 시간이 html 로드가 끝날 때

script 코드를 위에다 작성했을 경우에는 DOMContentLoaded를 사용해야 한다

script 코드가 위에다 작성했을 때 스크립트가 엄청 많은 경우에는 스크립트가 끝날 때 까지 html이 로드가 끝나지 않아서 오래 걸림

script 코드를 아래에 작성했을 경우 사용자가 화면을 볼 수 있는 시간은 html이 로드가 된 뒤 script 코드를 실행이 되어서 사이트를 먼저 볼 수 있다

!!사이트가 3초 이상 뜨지 않으면 사용자가 떠난다!!
1초에서 3초이내로 뜰 수 있도록 만들어야 한다

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="public/js/index.js"></script>
  </head>
  <body>
    <form method="get" id="loginForm" action="./">
      <input type="text" id="uid" name="userid" value="web7722" />
      <input type="password" id="upw" name="userpw" value="1234" />
      <button type="submit">로그인</button>
    </form>
  </body>
</html>
```

form 태그 내용 확인하기
name => key value 값중 key

input 박스의 value 값은 미리 값을 넣는다는 의미다
로그인 버튼 클릭시 url http://localhost:5500/221109/?userid=web7722&userpw=1234

원하는 결과
url에 찍히기 전에 input 박스에 입력한 값을 console.log로 찍고 url을 변경하고 싶다

자바스크립트로 html의 기본적이 기능을 막고 내가 하고 싶은 행동을 하고(로직을 구동한 다음) 그 다음 작동을 시킨다

## submit 이벤트 거는 방법

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="public/js/index.js"></script>
  </head>
  <body>
    <form method="get" id="loginForm" action="http://google.com">
      <input type="text" id="uid" name="userid" value="web7722" />
      <input type="password" id="upw" name="userpw" value="1234" />
      <button type="submit">로그인</button>
    </form>
  </body>
</html>
```

```js
function submitHandler() {
  alert("!!!");
}

function init() {
  const form = document.querySelector("#loginForm");
  form.addEventListener("submit", submitHandler);
  // submit 이벤트는 form 엘리먼트에서만 이벤트 등록 가능
}

document.addEventListener("DOMContentLoaded", init);
```

### submit 이벤트가 없을 경우

1. 브라우저에서 submit 버튼을 누르면
2. 내용을 만들어서 (queryString) Action 값에 있는 URL로 이동

### submit 이벤트가 있을 경우

1. 브라우저에서 submit 버튼을 누르면
2. submit 이벤트를 발동시킴. 이 후 submitHandler 함수가 호출되고 호출이 끝나면
3. 내용을 만들어서 (queryString) Action 값에 있는 URL로 이동한다.

Action 값에 있는 URL 이동을 막고 싶다면
Handler 함수 안에서 이벤트 객체를 받아서
`preventDefault()` 메서드를 호출하면 됨

```js
e.preventDefault();
```

> 내용을 만들어서 (queryString) Action 값에 있는 URL로 이동한다. => 작동 안되게 함

사용 예시

```js
// HTML load가 되지 않은 상태에서 querySelector을 사용했기 때문에 Element|null

function submitHandler(e) {
  e.preventDefault(); // 엘리먼트가 가지고 있는 기능들을 막는 메서드 !!
  // 자주 사용하는 메서드!!
  console.log(e);
  // SubmitEvent {isTrusted: true, submitter: button, type: 'submit', target: form#loginForm, currentTarget: form#loginForm, …}
  alert("!!!");
}

function init() {
  const form = document.querySelector("#loginForm");

  form.addEventListener("submit", submitHandler);
  // submit 이벤트는 form 엘리먼트에서만 이벤트 등록 가능
}

document.addEventListener("DOMContentLoaded", init);
```

이후 내가 원하는 시점에서 submit 신호를 날리고 싶다면

```js
e.target.submit();
```

1. 만약에 input 박스가 비어있다면 submit을 안날리고
2. 비어있으면 input 박스 색깔을 바꾸기
3. input 박스가 채워져있다면 submit 날리기

### 1. 만약에 input 박스가 비어있다면 submit을 안날리고

input 박스 내용이 비어있다라는 것을 어떻게 알까?

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="public/js/index.js"></script>
  </head>
  <body>
    <form method="get" id="loginForm" action="http://google.com">
      <input type="text" id="uid" name="userid" value="" />
      <input type="password" id="upw" name="userpw" value="" />
      <button type="submit">로그인</button>
    </form>
  </body>
</html>
```

id=uid 인 input 박스를 가져오기 value 값도 가져오기
input 박스의 value 값이 없다면 비어있다

```js
function submitHandler(e) {
  e.preventDefault();

  const uid = document.querySelector("#uid");
  const upw = document.querySelector("#upw");
  console.log(uid);
  console.log(uid.value); // submit을 눌렀을 때 가지고 있던 값
  console.log(upw.value);
}
```

로그인 로직 구현?

```js
function submitHandler(e) {
  e.preventDefault();

  const uid = document.querySelector("#uid");
  const upw = document.querySelector("#upw");
  console.log(uid);
  console.log("아이디는 : ", uid.value !== ""); // submit을 눌렀을 때 가지고 있던 값
  console.log("패스워드는 : ", upw.value !== "");

  if (uid.value !== "" && upw.value !== "") {
    e.target.submit();
  } else {
    alert("아이디나 패스워드를 입력해 주세요.");
  }
}

function init() {
  const form = document.querySelector("#loginForm");
  //   console.log(form);

  form.addEventListener("submit", submitHandler);
  // submit 이벤트는 form 엘리먼트에서만 이벤트 등록 가능
}

document.addEventListener("DOMContentLoaded", init);
```

입력 값이 없으면 아래에 글자 나오게 하기

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="public/js/index.js"></script>
    <style>
      #error {
        color: red;
        font-size: 12px;
        display: none;
      }
    </style>
  </head>
  <body>
    <form method="get" id="loginForm" action="http://google.com">
      <input type="text" id="uid" name="userid" value="" />
      <input type="password" id="upw" name="userpw" value="1234" />
      <button type="submit">로그인</button>
    </form>
    <div id="error">아이디나 패스워드가 비워져있습니다.</div>
  </body>
</html>
```

```js
function submitHandler(e) {
  e.preventDefault();

  const uid = document.querySelector("#uid");
  const upw = document.querySelector("#upw");
  const error = document.querySelector("#error");
  console.log(uid);
  console.log("아이디는 : ", uid.value !== ""); // submit을 눌렀을 때 가지고 있던 값
  console.log("패스워드는 : ", upw.value !== "");

  if (uid.value !== "" && upw.value !== "") {
    e.target.submit();
  } else {
    alert("아이디나 패스워드를 입력해 주세요.");
    error.style = "display:block";
  }
}

function init() {
  const form = document.querySelector("#loginForm");
  //   console.log(form);

  form.addEventListener("submit", submitHandler);
  // submit 이벤트는 form 엘리먼트에서만 이벤트 등록 가능
}

document.addEventListener("DOMContentLoaded", init);
```

@아이디가 비어있으면 아이디 패스워드가 비어있으면 패스워드가 나오게 만들어 보기

### js로 element 만들기

처음에는 아무것도 없다가
uid : web77222
upw : 1234
입력하고 로그인 버튼을 누를때마다 입력한 값이 랜더 영역에 생기게 (계속 추가되게)
uid : web77222 upw : 1234 가 생기게

동적으로 요소가 추가되게

자바스크립트로 엘리먼트를 만들어서 끼워넣는다

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="public/js/index.js"></script>
    <style>
      #error {
        color: red;
        font-size: 12px;
        display: none;
      }
    </style>
  </head>
  <body>
    <form method="get" id="loginForm" action="http://google.com">
      <input type="text" id="uid" name="userid" value="" />
      <input type="password" id="upw" name="userpw" value="" />
      <button type="submit">로그인</button>
    </form>
    <div id="error">아이디나 패스워드가 비워져있습니다.</div>
    <ul id="userList"></ul>
  </body>
</html>
```

#### Element 생성

````
```js
document.createElement(엘리먼트이름);
document.createElement("li"); // li 엘리먼트가 만들어짐
// 만들어지기만 했을뿐 넣어지지는 않았다
````

#### Element 넣기

```html
<ul id="userList"></ul>
```

```js
const userList = document.querySelector("#userList"); // 존재하는 엘리먼트 선택
// console.dir(userList);
const liElement = document.createElement("li"); // 생성만 함
liElement.innerHTML = "hello world!"; // 값 채워 넣기
userList.append(liElement); // 자식 요소로 추가하기
```

append => 자식요소로 추가하겠다
여기서는 ul 안에 넣겠다

넣기를 원하는 공간을 선택한 뒤 엘리먼트를 생성하고 값을 넣고 추가를 해준다

완성

```js
// submit 버튼을 눌렀을때
// 아이디랑 패스워드가 비어있지 않을때
// 해당 정보를 가져와서
// list를 만든다
// 1. 어디에 엘리먼트를 추가할거냐
// 2. 어떤 엘리먼트로 추가할거냐
// 3. 추가 했던 엘리먼트의 내용을 어떻게 만들거냐
// 4. 만들었던 엘리먼트를 어떻게 추가할거냐
function submitHandler(e) {
  e.preventDefault();

  const uid = document.querySelector("#uid");
  const upw = document.querySelector("#upw");
  const error = document.querySelector("#error");
  console.log(uid);
  console.log("아이디는 : ", uid.value !== ""); // submit을 눌렀을 때 가지고 있던 값
  console.log("패스워드는 : ", upw.value !== "");

  if (uid.value !== "" && upw.value !== "") {
    // e.target.submit();
    const userList = document.querySelector("#userList");
    const li = document.createElement("li");
    li.innerHTML = uid.value + " " + upw.value;
    userList.append(li);

    uid.value = ""; // 값 제거
    upw.value = ""; // 값 제거
    error.style = "display:none";
  } else {
    alert("아이디나 패스워드를 입력해 주세요.");
    error.style = "display:block";
  }
  uid.focus(); // focus 설정
}

function init() {
  const form = document.querySelector("#loginForm");
  //   console.log(form);

  form.addEventListener("submit", submitHandler);
  // submit 이벤트는 form 엘리먼트에서만 이벤트 등록 가능
}

document.addEventListener("DOMContentLoaded", init);
```

## keyevent

입력을 할 때마다 이벤트를 발동해야 됨
키보드를 입력할 때마다 콘솔로그를 찍을 수 있는가

keyup : 누르고 땠을때 실행
keydown : 키보들를 누를때 실행, 누르고 있을 때마다 실행
keypress : 누르고 있을때도 이벤트 발동, 한글 인식 안됨, 방향키에 많이 사용

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- <script src="public/js/index.js"></script> -->
    <style>
      #error {
        color: red;
        font-size: 12px;
        display: none;
      }
    </style>
  </head>
  <body>
    <form method="get" id="loginForm" action="http://google.com">
      <input type="text" id="uid" name="userid" value="" />
      <input type="password" id="upw" name="userpw" value="" />
      <button type="submit">로그인</button>
    </form>
    <div id="error">아이디나 패스워드가 비워져있습니다.</div>
    <ul id="userList"></ul>

    <h3>비밀번호</h3>
    <input type="password" id="pw" />
    <h3>비밀번호 확인</h3>
    <input type="password" id="repw" />
    <div id="pwError"></div>
    <script src="public/js/keyevent.js"></script>
  </body>
</html>
```

```js
const pw = document.querySelector("#pw"); // 객체
const repw = document.querySelector("#repw");
const error = document.querySelector("#pwError");

function changeHandler(e) {
  if (pw.value === "") {
    error.style = "color:red;";
    error.innerHTML = "비밀번호를 먼저 입력해주세요";
    pw.focus();
    e.target.value = "";
    return;
  }
  if (e.target.value === pw.value) {
    error.style = "color:green;";
    error.innerHTML = "패스워드가 일치합니다.";
  } else {
    error.style = "color:red;";
    error.innerHTML = "패스워드가 일치하지 않습니다.";
  }
}

// keyup : 누르고 땠을때 실행
// keydown : 키보들를 누를때 실행, 누르고 있을 때마다 실행
// keypress : 누르고 있을때도 이벤트 발동, 한글 인식 안됨, 방향키에 많이 사용

repw.addEventListener("keyup", changeHandler);
```

# CRUD

create
read
update
delete

## ToDoList

## comment

## board

## Event

click
keyup
DOMContentLoaded

### DOM

DataType
Object - 참조데이터

Method
**Element**

- document.getElementById()
- document.getElementByClassName()
- document.getElementsTagName()

** 이거 너무 훌륭 **

- document.querySelector()
- document.querySelectorAll()

- HTML on Click="alert('hello world!')" => X
- Element.onClick = function() {}
  - 1개 Event 2개를 등록할 수 없다
  - 삭제하기 편하다
- Element.addEventListener(이벤트, 콜백함수)
  - 복수의 이벤트를 넣을 수 있다
  - 삭제하기 불편하다
  - 코드형태가 어렵다 callback...

```js
Element.addEventListener(이벤트, callback);
// 이벤트가 발동되면 callback을 실행해라
```

```js
function listener(event, callback) {
  if (event === "click") {
    callback();
  }
}

listener("click", function () {});
```

자바스크립트가 내부적으로 이벤트가 올 때 까지 멈춰줌

Event Object

```js
function handler(e) {
  console.log(e);
  e.target;
  e.type;
  e.preventDefault();
}

div.addEventListener("click", handler);
```

e는
addEvent리스너는 객체를 가지고 있다가
함수를 호출을 하게되면 인자 값으로 넣어준다
그래서 핸들러에서 추가적으로 인자값을 받을 수 없다

이벤트
submit
click
mouseover
mouseout
keyup
keydown
keypress
