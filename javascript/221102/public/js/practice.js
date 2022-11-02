// 만약 매개 변수가 1개일 경우에는 ()도 생략 가능(선택 사항)
// 매개 변수가 없는 함수는 () 필요!!!

// 함수 표현식
const sum = function (a) {
  return a + 1;
};

console.log(sum(1));

// 화살표 함수
const sumArrow = (a) => a + 1;

console.log(sumArrow(1));
