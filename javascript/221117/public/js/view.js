const item = window.localStorage.getItem("boards"); // string이 반환됨

// console.log(item); // string => object

const boards = JSON.parse(item);

const idx = location.search.split("="); // '?index=3' ['?index', '3']
const index = idx[1];
const board = boards[index];

// console.log(board);

// console.log(board.index);
// console.log(board.subject);
// console.log(board.content);
// console.log(board.writer);
// console.log(board.date);
// console.log(board.hit);

const viewfrm = document.querySelectorAll("#viewFrm > div");

for (let i = 0; i < viewfrm.length; i++) {
  const id = viewfrm[i].id; // element id
  const span = viewfrm[i].querySelector("span");
  span.innerHTML = board[id];
}
