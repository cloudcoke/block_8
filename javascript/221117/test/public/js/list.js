let boards = localStorage.getItem("boards"); // string
// console.log(boards)

if (boards === null) {
  // 로컬 스토리지에 빈 배열을 string 형태로 넣기
  const listStr = JSON.stringify([]);
  // console.log(listStr);
  // console.log(typeof listStr);
  localStorage.setItem("boards", listStr);
  boards = listStr;
}

const tbody = document.querySelector("tbody");
const boardsObj = JSON.parse(boards);
// console.log(tbody);
console.log(boardsObj);

function template(boardsObj, index) {
  return `
    <tr>
      <td>${index + 1}</td>
      <td><a href='/board/view.html?index=${index}'>${boardsObj.subject}</a></td>
      <td>${boardsObj.content}</td>
      <td>${boardsObj.date}</td>
      <td>${boardsObj.hit}</td>
    </tr>
  `;
}

for (let i = 0; i < boardsObj.length; i++) {
  tbody.innerHTML += template(boardsObj[i], i);
}
