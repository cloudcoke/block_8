1. 사용할 엘리먼트 가져오기
   1. #commentFrm => form 태그
   2. #comment-list => 댓글 리스트가 들어가는 자리
2. 댓글을 담을 배열 선언
   1. state => 이 안에 객체가 들어갈 예정

```js
const commentFrm = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
const state = [];
```

---

1. submit 이벤트 걸기
   1. 이벤트 발생 시 객체에 아이디, 댓글 내용, 날짜가 저장이 됨
   2. 객체를 배열에 순서대로 넣음
   3. 빈 댓글은 오류를 발생시킴
   4. 이벤트 처리 완료 후 focus를 유지, 내용은 reset

```js
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

---

1. class로 객체 찍어내기
   1. 이벤트 발생 시 아이디, 댓글 내용, 날짜를 담을 객체를 생성하는 틀을 만들어줌
   2. 아이디는 고정값, 댓글 내용은 변동사항, 날짜는 Date 객체 사용
   3. 댓글 내용을 저장할 때 값이 비어있지 않은지 체크를 하는 setter 사용
   4. 날짜를 원하는 형식으로 바꾸어주는 메소드를 생성

```js
class Comment {
  constructor(content) {
    this.userid = "web7722";
    this.Content = content;
    // this.date = "2022-11-16";
    this.updated = false;
    this.now = new Date();
  }

  set Content(value) {
    if (value.length === 0) throw new Error("Content가 비어있음");
    this.content = value;
  }

  getToday(separator = "") {
    const date = this.now;
    let mm = date.getMonth() + 1; // 0 ~ 11
    let dd = date.getDate();
    let yyyy = date.getFullYear();
    mm = (mm > 9 ? "" : "0") + mm; // 9 -> 09
    dd = (mm > 9 ? "" : "0") + dd; // 1 -> 01
    const arr = [yyyy, mm, dd];

    return arr.join(separator);
  }
}
```

---

1. 생성한 객체를 배열에 담아주기

```js
function addComment(instance) {
  state.push(instance);
}
```

---

1. HTML 파일에 추가될 엘리먼트를 생성하고 내용을 추가해주기
   1. 필요한 엘리먼트를 생성한다
   2. 원하는 구조로 만들어 준다
   3. 속성을 추가한다
   4. 값을 넣는다
   5. 만약 이벤트를 발생시키고 싶다면 이벤트를 추가한다
   6. 작업이 끝난 엘리먼트를 반환한다

```js
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
  li3.innerHTML = state[index].getToday(".");

  return ul;
}
```

---

1. 배열에 담긴 요소들을 화면에 출력해줌

```js
function drawing() {
  commentList.innerHTML = "";
  for (let i = state.length - 1; i >= 0; i--) {
    const row = createRow(i);
    commentList.append(row);
  }
}
```

---

1. 댓글 수정을 위해 댓글을 클릭할 때 input 박스가 나올 수 있도록 함
   1. 클릭 이벤트를 등록한다
   2. 클릭한 엘리먼트의 클래스네임을 이용해 수정과 삭제를 판별

```js
function clickHandler(e) {
  if (e.target.className === "comment-content") {
    const index = parseInt(e.target.parentNode.dataset.index);
    state[index].updated = true;
    drawing();
  } else if (e.target.className === "comment-delete-btn") {
    const index = parseInt(e.target.parentNode.parentNode.dataset.index);
    state.splice(index, 1);
    drawing();
  }
}

commentList.addEventListener("click", clickHandler);
```
