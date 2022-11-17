const boardsStr = localStorage.getItem("boards");
// console.log(boardsStr);

const boardsObj = JSON.parse(boardsStr);
// console.log(boardsObj);

const index = location.search.split("=")[1];
// console.log(index);
const board = boardsObj[index];
// console.log(board);

const viewFrm = document.querySelectorAll("#viewFrm > div");
// console.log(viewFrm);
for (let i = 0; i < viewFrm.length; i++) {
  const id = viewFrm[i].id;
  viewFrm[i].innerHTML += " " + board[id];
}
