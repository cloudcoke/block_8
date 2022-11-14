const lottoList = document.querySelectorAll("#lotto_contain > #lotto_box > li");
const bonusElement = document.querySelector("#bonus_contain > #bonus_box > #bonus_num");
const numCreateBtn = document.querySelector("#create_num");

function numCreate() {
  const numList = [];
  const lottoNum = [];
  const result = {};
  let ranNumIndex = 0;
  for (let i = 0; i < 45; i++) {
    numList.push(i + 1);
  }

  for (let i = 0; i < 7; i++) {
    ranNumIndex = Math.floor(Math.random() * numList.length);
    lottoNum.push(numList[ranNumIndex]);
    numList.splice(ranNumIndex, 1);
  }

  const bonusNum = lottoNum[lottoNum.length - 1];
  lottoNum.splice(lottoNum.length - 1, 1);
  result["lottoNum"] = lottoNum;
  result["bonusNum"] = bonusNum;

  return result;
}

function rangeNum(num) {
  if (num >= 1 && num <= 10) {
    return "range_1";
  }
  if (num >= 11 && num <= 20) {
    return "range_2";
  }
  if (num >= 21 && num <= 30) {
    return "range_3";
  }
  if (num >= 31 && num <= 40) {
    return "range_4";
  }
  if (num >= 41 && num <= 45) {
    return "range_5";
  }
}

function sorting(arr) {
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function resultLottoNum() {
  const resultNum = numCreate();
  const sortingNum = sorting(resultNum.lottoNum);
  for (i = 0; i < lottoList.length; i++) {
    lottoList[i].innerHTML = sortingNum[i];
    lottoList[i].className = rangeNum(sortingNum[i]);
  }
  bonusElement.innerHTML = resultNum.bonusNum;
  bonusElement.className = rangeNum(resultNum.bonusNum);

  return resultNum.lottoNum;
}

resultLottoNum();
numCreateBtn.addEventListener("click", resultLottoNum);
