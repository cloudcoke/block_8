# Day 1

# Comment

댓글 구현 - CRUD

## 작업내용

1. 댓글을 입력할 수 있다. (Create)

   - 댓글 입력폼에 내용을 입력한 뒤 `submit`을 누르면 리스트에 추가된다.
   - 만약 입력폼이 비어있는 상태에서 `submit`을 누르면 경고 팝업을 띄움 (alert or modal)
   - 댓글을 성공적으로 처리가 되면 입력폼을 `reset` 한다.

2. 댓글을 리스트로 볼 수 있다. (Read)

   - 댓글 내용은 `아이디` `댓글 내용` `날짜`로 표현한다.
   - 댓글 리스트는 최신순으로 나타낸다.
   - 댓글 총 갯수를 표현한다.
   - 삭제 버튼이 존재한다.

3. 댓글을 수정할 수 있다. (Update)

   - 댓글 리스트에서 내용을 **클릭** 하면 **input box**로 변경된다.
   - input value 값을 **클릭**한 내용을 유지한다.
   - input 내용을 `enter`를 누르면 수정된다.

4. 댓글을 삭제할 수 있다. (Delete)

   - 해당 리스트의 삭제 버튼을 **클릭**하면 안내창을 띄운다.
   - 안내창에서 확인 버튼을 누르면 삭제
   - 안내창에서 취소 버튼을 누르면 아무런 변화를 주지 않는다.

## 설명

기본적으로 CRUD를 작업할 때 `C`를 먼저 작업함

Create 작업시 Read와 연관성이 높다.

데이터를 어떻게 저장하는 것 까지가 Create의 영역

변수에 어떻게 넣을거냐

Create 작업시 저장까지만 생각하자

### Create 설명

Object, Array

변수 하나에 데이터 여러개 담을 수 있음

객체, 배열을 같이 써야하는 상황 `Object[]`

리스트를 표현할 때는 배열이 좋은거 같고, 하나의 댓글에 내용을 표현할 때는 객체가 좋은거 같다.

그래서 데이터타입이 `Object[]`가 될 것 같다.

```js
const list = [
  {
    userid: "web7722",
    comment: "내용",
    date: "2022-11-15",
  },
  {
    userid: "web7722",
    comment: "내용",
    date: "2022-11-15",
  },
];
```

문제
학생을 객체로 표현하세요

문제
학생리스트를 만드세요

```js
const students = [];

const person = {
  name: "곽인구",
  age: 32,
};

const person2 = {
  name: "장준영",
  age: 28,
};

students.push(person);
students.push(person2);
```

생성자 함수

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("곽인구", 32);
const person2 = new Person("장준영", 28);

student.push(person1, person2);
```

new Person()으로 함수를 호출 시 `this = {}` `return this` 가 생략이 되어있음

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("곽인구", 32);
1;
const person1 = new Person("장준영", 28);
```

submit버튼은 기본적으로 url이 변경이 되기 때문에
preventDefault를 이용해 막아 줘야 함

```js
const form = document.querySelector("#commentFrm");

function submitHandler(e) {
  e.preventDefault();
  console.log(e.target); // object -> formElement
  console.log(e.target.content); // input Element object
  console.log(e.target.content.value); // input 박스 안에 작성한 텍스트가 나옴
}

form.addEventListener("submit", submitHandler);
```

```js
e.target.reset();
form.reset();
```

form 엘리먼트에만 존재하는 메서드
reset() => form 엘리먼트 안의 인풋 박스의 value를 없애줌

list를 submitHandler 안에서 변경해주어야 함
눌렀을때 변경이 되기 위해서?

### Read 설명

어떤 데이터를 보여줄거냐

```js
const list = [
  { userid: "web7722", content: "안녕하세요1", date: "2022-11-15" },
  { userid: "web7722", content: "안녕하세요2", date: "2022-11-15" },
  { userid: "web7722", content: "안녕하세요3", date: "2022-11-15" },
];
```

데이터를 가지고 엘리먼트를 어떻게 표현할 거냐
DOM을 잘 다뤄야 함
createElement가 필요함 - 요소가 없다가 생기기 때문에
동적으로 엘리먼트를 추가해주는 코드가 필요함
먼저 엘리먼트를 만드는 코드를 테스트 해보자

어떤 형태로 표현할거냐

```html
<ul class="comment-row">
  <li class="comment-id">web7722</li>
  <li class="comment-content">안녕하세요1</li>
  <li class="comment-date">2022-11-15</li>
</ul>

<ul class="comment-row">
  <li class="comment-id">web7722</li>
  <li class="comment-content">안녕하세요2</li>
  <li class="comment-date">2022-11-15</li>
</ul>

<ul class="comment-row">
  <li class="comment-id">web7722</li>
  <li class="comment-content">안녕하세요3</li>
  <li class="comment-date">2022-11-15</li>
</ul>
```

그러면 나는 javascript를 통해서

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

일단 이런식으로 만들 수 있는가

엘리먼트 만드는 방법

```js
document.createElement("ul");
document.createElement("li");
```

자주하는 실수

```js
const li1 = document.createElement("li"); // 참조형태이기 때문에
const li2 = li1;
const li3 = li1;

// 위 코드는 다음과 같음
const obj1 = {};
const obj2 = obj1;
const obj3 = obj1;

obj2.name = "ingoo";
console.log(obj1.name);
```

```js
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

ul.append(li1);
ul.append(li2);
ul.append(li3);
```

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

속성명, 속성값
li1.setAttribute('class', )

```js
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

ul.append(li1);
ul.append(li2);
ul.append(li3);

ul.setAttribute("class", "comment-row");
li1.setAttribute("class", "comment-id");
li2.setAttribute("class", "comment-content");
li3.setAttribute("class", "comment-date");
```
