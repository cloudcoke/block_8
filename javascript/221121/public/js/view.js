const boardsObj = JSON.parse(localStorage.getItem("boards"));
const viewFrmList = document.querySelectorAll("#viewFrm > div");
const idx = location.search;
const index = parseInt(idx.split("=")[1]);

for (let i = 0; i < viewFrmList.length; i++) {
  const id = viewFrmList[i].id;
  viewFrmList[i].innerHTML += " " + boardsObj[index][id];
}

const beforeUrl = document.referrer;

const countView = (beforeUrl) => {
  if (beforeUrl.split("/").pop() === "list.html") {
    boardsObj[index].views++;
    localStorage.setItem("boards", JSON.stringify(boardsObj));
  }
};

countView(beforeUrl);

const modifyBtn = document.querySelector("#modify");

const modifyBtnHandler = (e) => {
  location.href = "/board/modify.html" + idx;
};

modifyBtn.addEventListener("click", modifyBtnHandler);
