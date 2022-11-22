let boardsStr = localStorage.getItem("boards");

if (boardsStr === null) {
  const boardList = JSON.stringify([]);
  localStorage.setItem("boards", boardList);
  boardsStr = boardList;
}

const boardsObj = JSON.parse(boardsStr);
const tbody = document.querySelector("tbody");

const template = (index, value) => {
  return `
    <tr>
        <td>${index + 1}</td>
        <td><a href="/board/view.html?index=${value.index}">${value.subject}</a></td>
        <td>${value.writer}</td>
        <td>${value.date}</td>
        <td>${value.views}</td>
    </tr>
    `;
};

for (let i = 0; i < boardsObj.length; i++) {
  tbody.innerHTML += template(i, boardsObj[i]);
}
