// boards 있니 없니

let item = localStorage.getItem("boards");
if (item === null) {
  const intialState = [];
  const state = JSON.stringify(intialState);
  localStorage.setItem("boards", state);
  item = state;
}

const tbody = document.querySelector("tbody");

function template(item, index) {
  return `
    <tr>
        <td>${index + 1}</td>
        <td><a href='/221117/board/view.html?index=${index}'>${item.subject}</a></td>
        <td>${item.content}</td>
        <td>${item.date}</td>
        <td>${item.hit}</td>
    </tr>
`;
}

// const obj = { index: 0, subject: "11", content: "11", date: "11", hit: 0 };
// tbody.innerHTML = template(obj);
// console.log(item);

const boards = JSON.parse(item);

for (let i = 0; i < boards.length; i++) {
  tbody.innerHTML += template(boards[i], i);
}
