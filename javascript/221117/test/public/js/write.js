const writeFrm = document.querySelector("#writeFrm");

// console.log(writeFrm);

class Board {
  constructor(subject, writer, content) {
    this.index = 0;
    this.subject = subject;
    this.writer = writer;
    this.content = content;
    this.date = "2022-11-17";
    this.hit = 0;
  }
}

// submit을 누를때마다 실행
// 값을 담은 객체를 로컬 스토리지에 저장하고
function submitHandler(e) {
  e.preventDefault();
  //   console.dir(e.target.subject);
  //   console.dir(e.target.writer);
  //   console.dir(e.target.content);
  const subject = e.target.subject.value;
  const writer = e.target.writer.value;
  const content = e.target.content.value;

  //   console.log(subject);
  //   console.log(writer);
  //   console.log(content);
  const instance = new Board(subject, writer, content);
  // console.log(instance);
  // goto list
  const boardsObj = JSON.parse(localStorage.getItem("boards"));
  boardsObj.push(instance);
  const index = boardsObj.length - 1;

  const boardsStr = JSON.stringify(boardsObj);
  localStorage.setItem("boards", boardsStr);
  e.target.reset(); // form reset
  location.href = "/board/view.html?index=" + index; // url change
}

writeFrm.addEventListener("submit", submitHandler);
