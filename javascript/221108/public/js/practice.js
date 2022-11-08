// 쉬운거부터 하나하나씩
// 1. 번호생성 버튼을 누르면 #lotto 엘리먼트를 보이게 하고 싶다
// 1.1 번호생성 버튼에다가 이벤트(click)를 넣자
// 1.1.1 번호생성 엘리먼트를 선택해서 가져올 수 있어야 함 = querySelector()
// 1.1.2 #lotto 선택해서 가져오기

// 2. 랜덤숫자를 뽑아서 부여하는 것
// 2.1 랜덤숫자를 뽑는것 1~45
// 2.2 랜덤숫자를 부여 (언제 부여할거냐)
// 2.2.1 클릭할때 랜덤값 생성해보기
// 2.2.2 랜덤값 6개 만들기
// 2.2.3 엘리먼트 선택 querySelectorAll()으로 li 다 선택
// 2.2.4 각각 순서에 맞게 내용을 넣어주기

// 문제 확인하기
// 1. 색깔이 안바뀜
// 1.1 내가 랜덤으로 뽑은 숫자가 범위가 어디에 해당되는지
//  1~10, 11~20, 21~30, 31~40, 41~45
// 1.1.1 12라는 숫자가 있을때 1~10인지 체크
//        9라는 숫자가 있을때 1~10인지 체크
// 1.2 input 1~45 1~10이라면 return a, 11~20이라면 return b, 21~30이라면 return c
// 2. 로또는 중복값이 없어야 함

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

// 배열을 생성
// 중복값 제거
// 길이가 6이 될때까지 반복
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

function buttonEvent(e) {
  lottoElement.className = "";
  const ranNum = randomNumCreate().sort((a, b) => a - b);

  for (let i = 0; i < 6; i++) {
    liList[i].innerHTML = ranNum[i];
    liList[i].className = rangeNum(ranNum[i]);
  }
}

btnElement.addEventListener("click", buttonEvent);

// function linearSearch(array, target) {
//   const length = array.length;

//   for (let i = 0; i < length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
// [1, 0, 2, 3]

// 반복돌면찾는것
// 이중 for문

// 빈 배열 생성
// 배열에 초기값 추가
// 배열의 길이가 6이 될 때까지 반복
// 배열의 중복 값 제거 (선형탐색)
function test() {
  const arr = [randomNum()];

  while (arr.length <= 5) {
    let num = randomNum();

    const deleteNum = linearSearch(arr, num);
    if (deleteNum >= 0) {
      arr.splice(deleteNum, 1);
    } else {
      arr.push(num);
    }
  }
  return arr;
}
