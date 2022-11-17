const modifyBtn = document.querySelector("#modify");
const deleteBtn = document.querySelector("#delete");
const boardsStr = localStorage.getItem("boards");
// console.log(boardsStr);

const boardsObj = JSON.parse(boardsStr);
// console.log(boardsObj);

const idx = location.search;
// console.log(idx);
const index = parseInt(idx.split("=")[1]); // string -> number
// console.log(index);
const board = boardsObj[index];
// console.log(board);
// console.log(boardsObj);

const viewFrm = document.querySelectorAll("#viewFrm > div");
// console.log(viewFrm);
for (let i = 0; i < viewFrm.length; i++) {
  const id = viewFrm[i].id;
  viewFrm[i].innerHTML += " " + board[id];
}

function modifyBtnHandler(e) {
  // console.log(e.target);
  location.href = "/board/modify.html" + idx;
}

function deleteBtnHandler(e) {
  // console.log(e.target);
  // 방법1. write에서 클래스 생성시 delete 속성 값을 false로 부여
  // view에서 삭제시 delete 속성 값을 true로 변경 나머지 값을 빈값으로 변경
  // list에서 delete가 true인 값은 예외처리
  // for (let i = 0; i < viewFrm.length; i++) {
  //   const id = viewFrm[i].id;
  //   board[id] = "";
  // }
  // board.delete = true;
  // console.log(board.delete);
  // console.log(board);

  // 방법2. view에서 삭제시 boardsObj에서 splice로 삭제
  // 해당 인덱스 값 뒤에 있는 인덱스를 한 칸씩 땡기기
  // console.log(boardsObj[index]);
  boardsObj.splice(index, 1);
  for (let i = index; i < boardsObj.length; i++) {
    boardsObj[i].index = i;
  }

  const boardsStr = JSON.stringify(boardsObj);
  localStorage.setItem("boards", boardsStr);
  location.href = "/board/list.html";
}

modifyBtn.addEventListener("click", modifyBtnHandler);
deleteBtn.addEventListener("click", deleteBtnHandler);
