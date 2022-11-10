const lottoElement = document.querySelector("#lotto");
const btnElement = document.querySelector("#btn");
const liList = document.querySelectorAll("#lotto > li");

function randomNum() {
  const ranNum = Math.floor(Math.random() * 45 + 1);
  return ranNum;
}

function betweenNum(num, min, max) {
  if (num >= min && num <= max) {
    return true;
  }
  return false;
}

function rangeNum(num) {
  if (betweenNum(num, 1, 10)) {
    return "a";
  }
  if (betweenNum(num, 11, 20)) {
    return "b";
  }
  if (betweenNum(num, 21, 30)) {
    return "c";
  }
  if (betweenNum(num, 31, 40)) {
    return "d";
  }
  if (betweenNum(num, 41, 45)) {
    return "e";
  }
}

function randomNumCreate() {
  const randomNumArr = [randomNum()];
  for (let i = 0; i < 5; i++) {
    let temp = randomNum();
    for (let j = 0; j < randomNumArr.length; j++) {
      if (randomNumArr[j] === temp) {
        randomNumArr.splice(j, 1);
        i--;
      }
    }
    randomNumArr.push(temp);
  }
  return randomNumArr;
}

function buttonEvent() {
  lottoElement.className = "";
  const ranNum = randomNumCreate();

  for (let i = 0; i < 6; i++) {
    liList[i].innerHTML = ranNum[i];
    liList[i].className = rangeNum(ranNum[i]);
  }
}

btnElement.addEventListener("click", buttonEvent);
