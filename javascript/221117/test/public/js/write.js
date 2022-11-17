const writeFrm = document.querySelector("#writeFrm");

// console.log(writeFrm);

class Board {
  constructor(index, subject, writer, content) {
    this.index = index;
    this.Subject = subject;
    this.Writer = writer;
    this.Content = content;
    this.Date = new Date();
    this.hit = 0;
    // 방법1
    // this.delete = false;
  }

  set Subject(value) {
    if (value.length === 0) throw new Error("제목을 입력해주세요");
    this.subject = value;
  }
  set Writer(value) {
    if (value.length === 0) throw new Error("작성자를 입력해주세요");
    this.writer = value;
  }

  set Content(value) {
    if (value.length === 0) throw new Error("내용을 입력해주세요");
    this.content = value;
  }

  set Date(value) {
    const date = value;
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    mm = (mm > 9 ? "" : 0) + mm;
    dd = (dd > 9 ? "" : 0) + dd;

    const arr = [yyyy, mm, dd];

    this.date = arr.join("-");
  }
}

// submit을 누를때마다 실행
// 값을 담은 객체를 로컬 스토리지에 저장
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
  // console.log(instance);
  // goto list
  try {
    const boardsObj = JSON.parse(localStorage.getItem("boards"));
    const boardsLength = boardsObj.length; // 인덱스 부여
    // console.log(boardsLength);
    const instance = new Board(boardsLength, subject, writer, content);
    boardsObj.push(instance);
    const index = boardsObj.length - 1;

    const boardsStr = JSON.stringify(boardsObj);
    localStorage.setItem("boards", boardsStr);
    e.target.reset(); // form reset
    location.href = "/board/view.html?index=" + index; // url change
  } catch (e) {
    alert(e.message);
    console.error(e);
  }
}

writeFrm.addEventListener("submit", submitHandler);
