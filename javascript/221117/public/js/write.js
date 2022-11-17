const writeFrm = document.querySelector("#writeFrm");

class Board {
  constructor(subject, content, writer) {
    this.index = 0;
    this.subject = subject;
    this.content = content;
    this.writer = writer;
    this.date = "2022-11-17";
    this.hit = 0;
  }
}

function submitHandler(e) {
  e.preventDefault();
  const subject = e.target.subject.value;
  const content = e.target.content.value;
  const writer = e.target.writer.value;
  const instance = new Board(subject, content, writer);
  console.log(instance);
  // "[]" -> []
  // boards -> []
  // boards.push(instance)
  const boards = JSON.parse(localStorage.getItem("boards"));
  boards.push(instance);
  const index = boards.length - 1;

  //   const item = JSON.stringify(instance);
  // boards: []
  // 덮어써짐
  //   localStorage.setItem("boards", item);
  // [] -> {}

  const item = JSON.stringify(boards);
  localStorage.setItem("boards", item);
  e.target.reset();
  location.href = "/221117/board/view.html?index=" + index;
}

writeFrm.addEventListener("submit", submitHandler);
