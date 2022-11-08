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

// 절차 지향적 사고

// 코드로서 문제가 있다

const btn = document.querySelector("#btn");
const lottoDisplay = document.querySelector("#lotto");
const lottoBox = document.querySelectorAll("#lotto > li");

// input 12, 9
// 문제 : 1~10에 해당하는가?
// output : true, false

// input:9 1~10인지 체크 between(9, 1, 10)
// input:41 40~45인지 체크 between(41, 40, 45)
function between(num, min, max) {
  if (num >= min && num <= max) {
    return true;
  }
  return false;
}

// input 1~45
// 문제 1~10 a, 11~20 b, 21~30 c ...
// output : a|b|c|d|e
function getClassName(num) {
  if (between(num, 41, 45)) {
    return "e";
  }
  if (between(num, 31, 40)) {
    return "d";
  }
  if (between(num, 21, 30)) {
    return "c";
  }
  if (between(num, 11, 20)) {
    return "b";
  }
  if (between(num, 1, 10)) {
    return "a";
  }
}

function randomLotto() {
  const random = Math.floor(Math.random() * 45 + 1);
  return random;
}

function lottoHandler(e) {
  //   lottoDisplay.className = "";
  const num1 = randomLotto();
  const num2 = randomLotto();
  const num3 = randomLotto();
  const num4 = randomLotto();
  const num5 = randomLotto();
  const num6 = randomLotto();

  const num1ClassName = getClassName(num1);
  const num2ClassName = getClassName(num2);
  const num3ClassName = getClassName(num3);
  const num4ClassName = getClassName(num4);
  const num5ClassName = getClassName(num5);
  const num6ClassName = getClassName(num6);

  lottoBox[0].innerHTML = num1;
  lottoBox[0].className = num1ClassName;
  lottoBox[1].innerHTML = num2;
  lottoBox[1].className = num2ClassName;
  lottoBox[2].innerHTML = num3;
  lottoBox[2].className = num3ClassName;
  lottoBox[3].innerHTML = num4;
  lottoBox[3].className = num4ClassName;
  lottoBox[4].innerHTML = num5;
  lottoBox[4].className = num5ClassName;
  lottoBox[5].innerHTML = num6;
  lottoBox[5].className = num6ClassName;
  lottoDisplay.classList.remove("none");
}
btn.addEventListener("click", lottoHandler);
