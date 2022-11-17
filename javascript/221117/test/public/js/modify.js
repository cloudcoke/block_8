const modifyFrm = document.querySelector("#modifyFrm");
// console.log(modifyFrm);
const backBtn = document.querySelector("#back");
// console.log(backBtn);
const idx = location.search;
const index = location.search.split("=")[1];

function modifyHandler(e) {
  e.preventDefault();
  //   console.dir(e.target.subject);
  //   console.dir(e.target.writer);
  //   console.dir(e.target.content);
  const subject = e.target.subject.value;
  const writer = e.target.writer.value;
  const content = e.target.content.value;

  const boardsObj = JSON.parse(localStorage.getItem("boards"));
  const board = boardsObj[index];

  board.subject = subject;
  board.writer = writer;
  board.content = content;

  const boardsStr = JSON.stringify(boardsObj);
  localStorage.setItem("boards", boardsStr);
  location.href = "/board/view.html" + idx;
}

function backBtnHandlr(e) {
  location.href = "/board/view.html" + idx;
}

modifyFrm.addEventListener("submit", modifyHandler);
backBtn.addEventListener("click", backBtnHandlr);
