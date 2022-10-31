/*
input
prompt 값을 2가지 받는다
10 숫자와 20숫자를 받는다
 */
// let input1 = prompt("첫번째 숫자를 입력해주세요.");
// let input2 = prompt("두번째 숫자를 입력해주세요.");

// console.log(input1); // 10
// console.log(input2); // 20
// console.log(input1 + input2); // 값이 문자열이기 때문에 1020이 나옴
// console.log(Number(input1) + Number(input2)); // 형변환
// console.log(parseInt(input1) + parseInt(input2)); // 형변환
// input 형태는 모든 입력을 문자열로 받는다

// 1.입력받기 (input)
// 2. 로직구현 (문제해결)
// 3. 출력

// 조건문 if
// if 예약어

// if (boolean(조건)) {
//     true 일 경우 실행될 영역
// } else {
//    false일 경우 실행될 영역
// }

//코드블럭 code block
// {
//   let a = 0; //code block 안에 선언된 변수
//   // 지역변수
// }
// 전역변수
// code block 바깥에 선언된 변수
// let a = 0; // 재선언???
// console.log(a);
// Uncaught ReferenceError: a is not defined
// a라는 주소를 찾을 수 없다
// 선언을 안하고 코드를 실행했을때 나오는 에러
// 중괄호 안에 선언된 변수들은 중괄호 안에서만 사용가능
// 저장되는 영역이 다르기 때문에 재선언이 된 것이 아님
// 지역변수는 잠깐 공간을 만들어 놓고 사라짐
// 지역변수는 일회성 변수라고 볼 수 있다
// code block 내에서 선언된 변수를 바깥으로 뺄 수 없음
// 바깥으로 빼고 싶다면
// let b;
// {
//   b = 0;
// }
// 위와 같이 사용하면 됨

/*
1. 각각 숫자를 받는 input을 만듬
2. 입력 받은 값을 a,b 변수에 담는다
3. a > b 클때는 "A가 큽니다" 출력
4. a < b 작을때는 "B가 큽니다" 출력
 */

/*
문제
같을때는?
 */
let a = Number(prompt("첫번째 숫자를 입력해주세요."));
let b = Number(prompt("두번째 숫자를 입력해주세요."));

// a = parseInt(a);
// b = parseInt(b);
// 형변환을 안해줘도 자동으로 형변환을 해주기는 한다.
// if (a > b) {
//   console.log("A가 큽니다.");
// } else {
//   console.log("B가 큽니다.");
// }
// console.log("10" * "20"); // 10 * 20 의도치 않은 결과
// console.log("10" * "20" + "30"); // 의도치 않은 결과
// let x = "10";
// let y = "20";
// let z = "30";
// console.log(x * y); // 의도치 않은 결과
// console.log(x * y + z); // 의도치 않은 결과

// 해결 방법 1
// if (a > b) {
//   console.log("A가 큽니다.");
// } else {
//   if (a < b) {
//     console.log("B가 큽니다.");
//   } else {
//     console.log("A와 B가 같습니다.");
//   }
// }
// 해결 방법 2 + string 조작
// A는 20 B는 10으로 A가 큽니다.
// A는 10 B는 20으로 B가 큽니다.
// A는 20 B는 20으로 둘이 같습니다.
if (a > b) {
  console.log("A는 " + a + " B는 " + b + "으로 A가 큽니다.");
} else if (a < b) {
  console.log("A는 " + a + " B는 " + b + "으로 B가 큽니다.");
} else {
  console.log("A는 " + a + " B는 " + b + "으로 둘이 같습니다.");
}
