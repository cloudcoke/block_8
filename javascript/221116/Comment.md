# Day 2

# create

```js
const commentFrm = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
const state = [];

function submitHandler(e) {
  e.preventDefault();
  console.log("hello world");
}

commentFrm.addEventListener("submit", submitHandler);
```

form 폼 Element 안에 input `value` 가져오는 것을 목표로 잡음

```js
const commentFrm = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
const state = [];

function submitHandler(e) {
  e.preventDefault();

  e.target.content; // Element
  // e.target 자식요소들 중에서 name과 id가 content인 애들을 가져옴
  // form 태그에서만 가능
}

commentFrm.addEventListener("submit", submitHandler);
```

생성자 함수는 첫글자 대문자로 작성해주자

```js
const commentFrm = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
const state = [];

function Comment(content) {
  this.userid = "web7722";
  this.content = content;
  this.date = "2022-11-16";
}

function submitHandler(e) {
  e.preventDefault();
  const form = e.target;
  const value = e.target.content.value;
  if (value === "") {
    alert("내용을 넣고 등록해라");
    return;
  }

  const instance = new Comment(value);
  state.push(instance);

  console.log(state);

  form.reset();
}

commentFrm.addEventListener("submit", submitHandler);
```

```js
// 함수선언식
function comment1() {}

// 생성자 함수
function Comment2() {}
// 헷갈릴 수 있음
```

```js
class Comment {
  constructor() {}
}

new Comment(); // new를 빼먹으면 오류를 내보냄
// 호이스팅 이슈도 해결됨
// 함수 선언식보다는 class 문법을 사용하자
```

값을 만들기 전에 체크하는게 좋다
핸들러 함수에는 실행만하도록

해당 인스턴스에서 값을 넣을때 (대입연산자를 사용할때) setter
값을 불러와서 보여줄 때 getter

```js
class Comment {
  constructor(content) {
    this.userid = "web7722";
    this.Content = content; // 대소문자 주의!!!
    this.date = "2022-11-16";
  }

  set Content(value) {
    // 대소문자 주의!!!
    if (value.length === 0) {
      console.log("content 내용을 채워주세요!");
    }
    this.content = value; // 대소문자 주의!!!
  }
}
```

한번 검증하고 입력한다

오류가 있음
확인 버튼을 누르면 content가 빈 객체가 생김
return을 사용해도 setter함수가 종료가 되는거임

# try catch 문

```js
function a() {
  throw "에러났음";
}

try {
  // 코드를 실행할 영역
  a();
  console.log("나 실행됨");
} catch (e) {
  // 에러가 날 경우 실행
  console.log("에러");
}
```

try 안쪽만 실행이 됨
a라는함수 호출
a함수 안에 있는 코드를 실행
throw 에러났음을 던짐
잡는다
throw 옆에 있는 값이
catch의 매개변수로 들어감

대부분 error가 났을 때
대부분 error라는 객체를 만들어서 던짐

```js
function a() {
  throw new Error("나 에러났음");
}

try {
  // 코드를 실행할 영역
  a();
  console.log("나 실행됨");
} catch (e) {
  // 에러가 날 경우 실행
  console.log(e);
  console.log("에러");
}
```

에러객체를 만들어주면 몇 번째 줄에서 에러가 났는지도 알 수 있음
활용 예제 - true

```js
function checkName(value) {
  if (value !== "ingoo") {
    throw new Error("나 에러났음");
  }
  return true;
}

try {
  // 코드를 실행할 영역
  let name = "ingoo";
  checkName(name);
  // 아래에 중요한 로직
  console.log("나 실행됨");
} catch (e) {
  // 에러가 날 경우 실행
  console.log(e);
}
```

활용 예제 - false

```js
function checkName(value) {
  if (value !== "ingoo") {
    throw new Error("나 에러났음");
  }
  return true;
}

try {
  // 코드를 실행할 영역
  let name = "ingoo1";
  checkName(name);
  // 아래에 중요한 로직
  console.log("나 실행됨");
} catch (e) {
  // 에러가 날 경우 실행
  console.log(e);
}
```

```js
const commentFrm = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
const state = [];

class Comment {
  constructor(content) {
    this.userid = "web7722";
    this.Content = content;
    this.date = "2022-11-16";
  }

  set Content(value) {
    if (value.length === 0) throw new Error("Content가 비어있음");
    this.content = value;
  }
}

function addComment(instance) {
  state.push(instance);
}

function submitHandler(e) {
  e.preventDefault();
  const form = e.target;
  const value = e.target.content.value;
  try {
    const instance = new Comment(value);
    addComment(instance);
  } catch (e) {
    console.log(e);
    alert("댓글을 입력해주세요");
  }

  form.reset();
}

commentFrm.addEventListener("submit", submitHandler);
```

내가 필요한 부분만 간결하게 작성하자

try catch 문
try 안에 error가 있는지 없는지 체크해주는 문법

try catch에서 e는
매개변수는 객체다

```js
const commentFrm = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
const state = [];

class Comment {
  constructor(content) {
    this.userid = "web7722";
    this.Content = content;
    this.date = "2022-11-16";
  }

  set Content(value) {
    if (value.length === 0) throw new Error("Content가 비어있음");
    this.content = value;
  }
}

function addComment(instance) {
  state.push(instance);
}

function submitHandler(e) {
  e.preventDefault();
  const form = e.target;
  const value = e.target.content.value;
  try {
    const instance = new Comment(value);
    addComment(instance);
  } catch (e) {
    alert(e.message); // e객체 안에 message => Error 객체에 넣어준 인자값
    console.log(e);
  }

  form.content.focus();
  form.reset();
}

commentFrm.addEventListener("submit", submitHandler);
```

# read

특정 함수에 매개변수가 3개 이상 되면 코드가 깔끔하지 않음
함수를 만들때 리턴을 할건지 안할건지 생각하고
어떤 리턴을 해줄건지
리턴을 한다면 미리 적어주고

# read 추가

리스트형 read
해당항목만 보는 read가 있음

# create

고유한 번호를 만들기 위해서 - `index` `고유번호` `key값`

# read

고유한 번호를 남기기 위해 - `index` `고유번호` `key값`
고유한 번호를 남겨야지만 read가 끝난것 - !중요!

```js
const commentFrm = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
const state = [];

class Comment {
  constructor(content) {
    this.userid = "web7722";
    this.Content = content;
    this.date = "2022-11-16";
  }

  set Content(value) {
    if (value.length === 0) throw new Error("Content가 비어있음");
    this.content = value;
  }
}

function addComment(instance) {
  state.push(instance);
}

function createRow(index) {
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");

  ul.append(li1);
  ul.append(li2);
  ul.append(li3);

  ul.setAttribute("class", "comment-row");
  ul.setAttribute("data-index", index);
  li1.setAttribute("class", "comment-id");
  li2.setAttribute("class", "comment-content");
  li3.setAttribute("class", "comment-date");

  li1.innerHTML = state[index].userid;
  li2.innerHTML = state[index].content;
  li3.innerHTML = state[index].date;

  return ul;
}

function drawing() {
  commentList.innerHTML = "";
  for (let i = state.length - 1; i >= 0; i--) {
    const row = createRow(i);
    commentList.append(row);
  }
}

function submitHandler(e) {
  e.preventDefault();
  const form = e.target;
  const value = e.target.content.value;
  try {
    const instance = new Comment(value);
    addComment(instance);
    drawing();
  } catch (e) {
    alert(e.message);
    console.log(e);
  }

  form.content.focus();
  form.reset();
}

commentFrm.addEventListener("submit", submitHandler);
```

index 부여가 read 끝

# update

내가 수정하려는 아이가 몇번째 인덱스인지 증거를 남겨야 함
Update는 가장 중요한 것은 내가 어떤 `댓글`을 수정해야 할 지 알아야 함
우리는 `create` `read`를 구현했을때 `array`에 데이터를 보관하고 있음

update, delete는 해댱 `index` `고유번호` `key값`이 존재해야 함

```js
const students = [];

const person = {
  name: "곽인구",
  age: 32,
};
const person2 = {
  name: "황산범",
  age: 30,
};
const person3 = {
  name: "박경철",
  age: 28,
};
students.push(person1);
students.push(person2);
students.push(person3);

students.splice(0, 1); // [{황산범},{박경철}]

// students[1].age = 27;
students[0].age = 27; // 삭제가 되면 인덱스가 바뀜
```

html 데이터셋
엘리먼트에 데이터를 저장하는 용도로 사용

### dataset

```html
<div id="header" data-index="5"></div>
```

```js
const header = document.querySelector("#header");

console.log(header.dataset.index); // 5
```

dataset => data
index => index

```js
// ul.dataset.index = index;
ul.setAttribute("data-index", index);
// 동일
```

댓글 리스트에서 댓글 내용에 클릭이벤트를 넣고 싶음

1. hello world!
2. 댓글 내용에 해당하는 index 출력

```js
const commentFrm = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
const state = [];

class Comment {
  constructor(content) {
    this.userid = "web7722";
    this.Content = content;
    this.date = "2022-11-16";
  }

  set Content(value) {
    if (value.length === 0) throw new Error("Content가 비어있음");
    this.content = value;
  }
}

function addComment(instance) {
  state.push(instance);
}

function createRow(index) {
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");

  ul.append(li1);
  ul.append(li2);
  ul.append(li3);

  ul.setAttribute("class", "comment-row");
  ul.setAttribute("data-index", index);
  li1.setAttribute("class", "comment-id");
  li2.setAttribute("class", "comment-content");
  li2.addEventListener("click", function () {
    console.log(index, "hello world");
  });
  li3.setAttribute("class", "comment-date");

  li1.innerHTML = state[index].userid;
  li2.innerHTML = state[index].content;
  li3.innerHTML = state[index].date;

  return ul;
}

function drawing() {
  commentList.innerHTML = "";
  for (let i = state.length - 1; i >= 0; i--) {
    const row = createRow(i);
    commentList.append(row);
  }
}

function submitHandler(e) {
  e.preventDefault();
  const form = e.target;
  const value = e.target.content.value;
  try {
    const instance = new Comment(value);
    addComment(instance);
    drawing();
  } catch (e) {
    alert(e.message);
    console.log(e);
  }

  form.content.focus();
  form.reset();
}

commentFrm.addEventListener("submit", submitHandler);
```

위와같이 이벤트를 걸어도 됨 하지만 이렇게 하면 나중에 문제가 생길 수 있음

```js
const commentFrm = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
const state = [];

class Comment {
  constructor(content) {
    this.userid = "web7722";
    this.Content = content;
    this.date = "2022-11-16";
  }

  set Content(value) {
    if (value.length === 0) throw new Error("Content가 비어있음");
    this.content = value;
  }
}

function addComment(instance) {
  state.push(instance);
}

function createRow(index) {
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");

  ul.append(li1);
  ul.append(li2);
  ul.append(li3);

  ul.setAttribute("class", "comment-row");
  ul.setAttribute("data-index", index);
  li1.setAttribute("class", "comment-id");
  li2.setAttribute("class", "comment-content");
  li3.setAttribute("class", "comment-date");

  li1.innerHTML = state[index].userid;
  li2.innerHTML = state[index].content;
  li3.innerHTML = state[index].date;

  return ul;
}

function drawing() {
  commentList.innerHTML = "";
  for (let i = state.length - 1; i >= 0; i--) {
    const row = createRow(i);
    commentList.append(row);
  }
}

function submitHandler(e) {
  e.preventDefault();
  const form = e.target;
  const value = e.target.content.value;
  try {
    const instance = new Comment(value);
    addComment(instance);
    drawing();
  } catch (e) {
    alert(e.message);
    console.log(e);
  }

  form.content.focus();
  form.reset();
}

function clickHandler(e) {
  console.log("hello world");
}

commentList.addEventListener("click", clickHandler);
commentFrm.addEventListener("submit", submitHandler);
```

```js
const commentFrm = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
const state = [];

class Comment {
  constructor(content) {
    this.userid = "web7722";
    this.Content = content;
    this.date = "2022-11-16";
  }

  set Content(value) {
    if (value.length === 0) throw new Error("Content가 비어있음");
    this.content = value;
  }
}

function addComment(instance) {
  state.push(instance);
}

function createRow(index) {
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");

  ul.append(li1);
  ul.append(li2);
  ul.append(li3);

  ul.setAttribute("class", "comment-row");
  ul.setAttribute("data-index", index);
  li1.setAttribute("class", "comment-id");
  li2.setAttribute("class", "comment-content");
  li3.setAttribute("class", "comment-date");

  li1.innerHTML = state[index].userid;
  li2.innerHTML = state[index].content;
  li3.innerHTML = state[index].date;

  return ul;
}

function drawing() {
  commentList.innerHTML = "";
  for (let i = state.length - 1; i >= 0; i--) {
    const row = createRow(i);
    commentList.append(row);
  }
}

function submitHandler(e) {
  e.preventDefault();
  const form = e.target;
  const value = e.target.content.value;
  try {
    const instance = new Comment(value);
    addComment(instance);
    drawing();
  } catch (e) {
    alert(e.message);
    console.log(e);
  }

  form.content.focus();
  form.reset();
}

function clickHandler(e) {
  console.log("hello world", e.target);
}

commentList.addEventListener("click", clickHandler);
commentFrm.addEventListener("submit", submitHandler);
```

자주 사용하는 기법

```js
function clickHandler(e) {
  if (e.target.className !== "comment-content") return;
  console.log(e.target.innerHTML);
  console.log(e.target.parentNode.dataset.index);
}
```

하고 싶은 작업의 반대로 하면 코드를 끝내버리는

```js
function clickHandler(e) {
  if (e.target.className !== "comment-content") return;
  console.log(e.target.innerHTML);
  console.log(e.target.parentNode.dataset.index);

  e.target.innerHTML = "";
  const input = document.createElement("input");
  e.target.append(input);
}
```

```js
function clickHandler(e) {
  if (e.target.className !== "comment-content") return;
  console.log(e.target.innerHTML);
  console.log(e.target.parentNode.dataset.index);
  const value = e.target.innerHTML;
  e.target.innerHTML = "";
  const input = document.createElement("input");
  input.value = value;
  e.target.append(input);
}
```

Comment 객체의 update 가 true일때 변경

```js
const commentFrm = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
const state = [];

class Comment {
  constructor(content) {
    this.userid = "web7722";
    this.Content = content;
    this.date = "2022-11-16";
    this.updated = false;
  }

  set Content(value) {
    if (value.length === 0) throw new Error("Content가 비어있음");
    this.content = value;
  }
}

function addComment(instance) {
  state.push(instance);
}

function createRow(index) {
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");

  const deleteBtn = document.createElement("span");

  ul.append(li1);
  ul.append(li2);
  ul.append(li3);

  ul.setAttribute("class", "comment-row");
  ul.setAttribute("data-index", index);
  li1.setAttribute("class", "comment-id");
  li2.setAttribute("class", "comment-content");
  li3.setAttribute("class", "comment-date");
  deleteBtn.setAttribute("class", "comment-delete-btn");
  deleteBtn.innerHTML = "❌";

  li1.innerHTML = state[index].userid;
  //   li2.innerHTML = state[index].content;
  if (state[index].updated) {
    const input = document.createElement("input");
    input.addEventListener("keyup", function (e) {
      if (e.keyCode !== 13) return;
      state[index].content = e.target.value;
      state[index].updated = false;
      drawing();
    });
    input.setAttribute("class", "comment-update-input");
    input.value = state[index].content;
    li2.append(input);
  } else {
    li2.innerHTML = state[index].content;
    li2.append(deleteBtn);
  }
  li3.innerHTML = state[index].date;

  return ul;
}

function drawing() {
  commentList.innerHTML = "";
  for (let i = state.length - 1; i >= 0; i--) {
    const row = createRow(i);
    commentList.append(row);
  }
}

function submitHandler(e) {
  e.preventDefault();
  const form = e.target;
  const value = e.target.content.value;
  try {
    const instance = new Comment(value);
    addComment(instance);
    drawing();
  } catch (e) {
    alert(e.message);
    console.log(e);
  }

  form.content.focus();
  form.reset();
}

function clickHandler(e) {
  if (e.target.className !== "comment-content") return;
  const index = parseInt(e.target.parentNode.dataset.index);
  const value = e.target.innerHTML;

  state[index].updated = true;
  drawing();
  //   if (e.target.className !== "comment-content") return;
  //   console.log(e.target.innerHTML);
  //   console.log(e.target.parentNode.dataset.index);
  //   const value = e.target.innerHTML;
  //   e.target.innerHTML = "";
  //   const input = document.createElement("input");
  //   input.value = value;
  //   e.target.append(input);
}

commentList.addEventListener("click", clickHandler);
commentFrm.addEventListener("submit", submitHandler);
```

update 끝

## Delete

버튼을 클릭하면 해당 인덱스 찿아오고
splice만 진행하고
다시 그리기

```js
const commentFrm = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
const state = [];

class Comment {
  constructor(content) {
    this.userid = "web7722";
    this.Content = content;
    this.date = "2022-11-16";
    this.updated = false;
  }

  set Content(value) {
    if (value.length === 0) throw new Error("Content가 비어있음");
    this.content = value;
  }
}

function addComment(instance) {
  state.push(instance);
}

function createRow(index) {
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");

  const deleteBtn = document.createElement("span");

  ul.append(li1);
  ul.append(li2);
  ul.append(li3);

  ul.setAttribute("class", "comment-row");
  ul.setAttribute("data-index", index);
  li1.setAttribute("class", "comment-id");
  li2.setAttribute("class", "comment-content");
  li3.setAttribute("class", "comment-date");
  deleteBtn.setAttribute("class", "comment-delete-btn");
  deleteBtn.innerHTML = "❌";

  li1.innerHTML = state[index].userid;
  if (state[index].updated) {
    const input = document.createElement("input");
    input.addEventListener("keyup", function (e) {
      if (e.keyCode !== 13) return;
      state[index].content = e.target.value;
      state[index].updated = false;
      drawing();
    });
    input.setAttribute("class", "comment-update-input");
    input.value = state[index].content;
    li2.append(input);
  } else {
    li2.innerHTML = state[index].content;
    li2.append(deleteBtn);
  }
  li3.innerHTML = state[index].date;

  return ul;
}

function drawing() {
  commentList.innerHTML = "";
  for (let i = state.length - 1; i >= 0; i--) {
    const row = createRow(i);
    commentList.append(row);
  }
}

function submitHandler(e) {
  e.preventDefault();
  const form = e.target;
  const value = e.target.content.value;
  try {
    const instance = new Comment(value);
    addComment(instance);
    drawing();
  } catch (e) {
    alert(e.message);
    console.log(e);
  }

  form.content.focus();
  form.reset();
}

function clickHandler(e) {
  if (e.target.className === "comment-content") {
    const index = parseInt(e.target.parentNode.dataset.index);
    const value = e.target.innerHTML;
    state[index].updated = true;
    drawing();
  } else if (e.target.className === "comment-delete-btn") {
    const index = parseInt(e.target.parentNode.parentNode.dataset.index);
    state.splice(index, 1);
    drawing();
  }
}

commentList.addEventListener("click", clickHandler);
commentFrm.addEventListener("submit", submitHandler);
```

## 댓글 현재 날짜로

join 메서드 사용

```js
const arr = [1, 2, 3];
"123"`${arr[0]}${arr[1]}${arr2}`;

arr[0] + "" + arr[1] + "" + arr[2];
```

```js
const phone = [010, 8955, 7722];
("010-8595-7722");
phone.join("");
```

```js
const arr = ["1991", "04", "27"];
arr.join("-");
("1991 - 04 - 27");
```
