const submitBtn = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
const state = [];

class Comment {
  constructor(content) {
    this.userid = "web7722";
    this.Content = content;
    this.Date = new Date();
    this.update = false;
  }

  set Content(value) {
    if (value.length === 0) throw new Error("Content가 비어있습니다.");
    this.content = value;
  }

  set Date(value) {
    const date = value;
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    let yyyy = date.getFullYear();

    mm = (mm > 9 ? "" : "0") + mm;
    dd = (mm > 9 ? "" : "0") + dd;
    const arr = [yyyy, mm, dd];

    this.date = arr.join("-");
  }
}

function addComment(obj) {
  state.push(obj);
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

  li1.innerText = state[index].userid;
  if (state[index].update) {
    isUpdate(index, li2);
  } else {
    li2.innerHTML = state[index].content;
    li2.append(deleteBtn);
  }
  li3.innerHTML = state[index].date;

  return ul;
}

function isUpdate(index, element) {
  const input = document.createElement("input");
  input.addEventListener("keyup", function (e) {
    if (e.keyCode !== 13) return;
    state[index].content = e.target.value;
    state[index].update = false;
    drawing();
  });
  input.setAttribute("class", "comment-update-input");
  input.value = state[index].content;
  element.append(input);
}

function drawing() {
  commentList.innerHTML = "";
  for (let i = state.length - 1; i >= 0; i--) {
    const row = createRow(i);
    commentList.append(row);
  }
}

function clickHandler(e) {
  if (e.target.className === "comment-content") {
    const index = parseInt(e.target.parentNode.dataset.index);
    state[index].update = true;
    drawing();
  } else if (e.target.className === "comment-delete-btn") {
    const index = parseInt(e.target.parentNode.parentNode.dataset.index);
    state.splice(index, 1);
    drawing();
  }
}

function submitBtnHandler(e) {
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

submitBtn.addEventListener("submit", submitBtnHandler);
commentList.addEventListener("click", clickHandler);
