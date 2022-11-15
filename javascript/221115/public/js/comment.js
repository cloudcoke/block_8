const form = document.querySelector("#commentFrm");
const total = document.querySelector("h4 > span");
const commentList = document.querySelector("#comment-list");
const list = [];

// 생성자 함수
function Comment(content) {
  this.userid = "web7722";
  this.content = content;
  this.date = "2022-11-15";
}

function totalRecord() {
  total.innerHTML = `(${list.length})`; // 템플릿 리터널 문법
  //   total.innerHTML = "(" + list.length + ")";
}

function createRow(userid, content, date) {
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

  li1.innerHTML = userid;
  li2.innerHTML = content;
  li3.innerHTML = date;

  return ul;
}

function drawing() {
  commentList.innerHTML = "";
  for (let i = list.length - 1; i >= 0; i--) {
    const row = createRow(list[i].userid, list[i].content, list[i].date);
    commentList.append(row);
  }
}

function submitHandler(e) {
  e.preventDefault();
  const input = e.target.content;
  if (input.value === "") {
    alert("내용을 넣고 등록 버튼을 눌러주세요.");
    return;
  }
  const instance = new Comment(input.value);
  list.push(instance);
  totalRecord();

  //   totalRecord();
  //   const ulElement = createRow(input.value);
  //   commentList.append(ulElement);
  drawing();
  e.target.reset();
}

totalRecord();
form.addEventListener("submit", submitHandler);
