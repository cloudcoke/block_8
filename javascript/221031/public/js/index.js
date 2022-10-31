// javascript 변수

/* 변수 선언 예약어
var - hoisting
let
const
 */

// 재선언 => 같은 이름으로 선언한다
// 재할당 => 이미 선언후 초기화한 변수에 새로운 값을 할당
/*
재선언 불가능, 재할당 가능
*/
var num = 1;

/*
재선언 불가능, 재할당 가능
재선언 하고나서 오류메시지 확인하기
 */
let num2 = 2;
num2 = 3;

/*
재선언 불가능, 재할당 불가능
재선언 할때 오류메시지와 재할당 했을때 오류메시지 확인하기
 */
const num3 = 3;

/*
예약어 => 예약어로 변수명을 선언할 수 없음
const const = 3
에러메시지 확인하기
*/

/*
string
''
""
`` (ES6 문법)
 */
const str = "Hello Javascript";
// 대입 연산자 기준으로 오른쪽으로 데이터가 들어가는 데 데이터 타입이 중요하다
console.log(1 + 1);
console.log(str + 1);

/*
연산자
+ - * / % == && === = ...
++ -- += -=
 */
let num4 = 5;
console.log(++num4); // 6
console.log(++num4); // 7
console.log(num4++); // 7
console.log(num4++); // 8
console.log(num4); // 9

/*
비교연산자
boolean
== === != !==
> < >= <=
 */

// 논리연산자
/*
1~10까지 출력하는데
5의 배수만 hello world를 찍어라
*/
console.log("---------");
for (let i = 1; i <= 10; i++) {
  if (i === 5 || i === 10) {
    console.log("hello wolrd!");
  } else {
    console.log(i);
  }
}

/*
|| or 둘 중 하나라도 참이면 참
true || true => true
true || false => true
false || true => true
false || false => false

&& and 둘 다 참이어야 참
true && true => true
true && false => false
false && true => false
false && false => false

! not 값 반전
!true => false
!false => true
 */

console.log("|| or");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log("&& and");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log("! not");
console.log(!true);
console.log(!false);

// 비교연산자를 활용해 boolean 타입을 만들 수 있다
console.log("---------");
let a = 1;
let b = 2;
let c = 1;
let d = 1;
console.log(a === b || c === d);

/*
Input / Output 
X 값을 입력했을때
Y 값을 출력하겠다
*/
// pormpt
// !대입 연산자 기준으로 오른쪽이 먼저 시작됨!
let input = prompt("값입력해주셈!!");
console.log("hello!!!");
console.log(input);
// hello가 처음에는 안뜨지만 prompt에 값을 넣고 확인 버튼을 누르거나 취소 버튼을 누르면 hello가 뜸
// prompt가 꺼지기 전까지 아랫줄 코드가 실행되지 않음
// 자바스크립트 싱글스레드 특징
