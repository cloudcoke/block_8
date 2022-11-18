const modifyFrm = document.querySelector("#modifyFrm");
// console.log(modifyFrm);
const modifyFrmList = document.querySelectorAll("#modifyFrm > div");
// console.log(modifyFrmList);
const backBtn = document.querySelector("#back");
// console.log(backBtn);
const idx = location.search;
const index = location.search.split("=")[1];
const boardsObj = JSON.parse(localStorage.getItem("boards"));
const board = boardsObj[index];

// console.log(viewFrm);
for (let i = 0; i < modifyFrmList.length; i++) {
  const element = modifyFrmList[i].childNodes[1];
  const id = element.name;
  // console.dir(modifyFrmList[i]);
  // console.log(id);
  element.value = board[id];
}

function isValue(subject, writer, content) {
  if (subject.length === 0) throw new Error("제목을 입력해주세요");
  if (writer.length === 0) throw new Error("작성자를 입력해주세요");
  if (content.length === 0) throw new Error("내용을 입력해주세요");
}

function modifyHandler(e) {
  e.preventDefault();
  //   console.dir(e.target.subject);
  //   console.dir(e.target.writer);
  //   console.dir(e.target.content);
  const subject = e.target.subject.value;
  const writer = e.target.writer.value;
  const content = e.target.content.value;

  try {
    isValue(subject, writer, content);

    board.subject = subject;
    board.writer = writer;
    board.content = content;
    const boardsStr = JSON.stringify(boardsObj);
    localStorage.setItem("boards", boardsStr);
    location.href = "/board/view.html" + idx;
  } catch (e) {
    alert(e.message);
    console.error(e);
  }
}

function backBtnHandlr(e) {
  location.href = "/board/view.html" + idx;
}

modifyFrm.addEventListener("submit", modifyHandler);
backBtn.addEventListener("click", backBtnHandlr);
