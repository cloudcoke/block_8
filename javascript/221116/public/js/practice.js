const commentBtn = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
const total = document.querySelector("h4 > span");
const list = [];

class Comment {
  constructor(content) {
    this.userid = "cloudcoke";
    this.Content = content;
    this.Date = new Date();
  }

  set Content(value) {
    if (value.length === 0) throw new Error("댓글을 입력해주세요!");
    this.content = value;
  }

  set Date(value) {
    const date = value;
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    mm = (mm > 9 ? "" : "0") + mm;
    dd = (dd > 9 ? "" : "0") + dd;
    const arr = [yyyy, mm, dd];

    this.date = arr.join("-");
  }
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

  li1.innerHTML = list[index].userid;
  li2.innerHTML = list[index].content;
  li3.innerHTML = list[index].date;

  li2.append(deleteBtn);
  deleteBtn.innerHTML = "❌";

  return ul;
}

function drawing() {
  commentList.innerHTML = "";
  for (let i = list.length - 1; i >= 0; i--) {
    const row = createRow(i);
    commentList.append(row);
  }
}

function totalRecord() {
  total.innerHTML = `(${list.length})`;
}

function commentBtnHandler(e) {
  e.preventDefault();
  const form = e.target;
  const value = e.target.content.value;

  try {
    const commentObj = new Comment(value);
    list.push(commentObj);
    drawing();
    totalRecord();
  } catch (e) {
    alert(e.message);
    console.error(e);
  }
  form.content.focus();
  form.reset();
}

totalRecord();
commentBtn.addEventListener("submit", commentBtnHandler);
