/* 
#함수

사용이유 : 중복코드를 피하기 위함
편리한건 공부를 많이해서 익숙해지는 단계가 필요함

# 함수 선언
(예약어) (예약어 제외)
function 함수이름() {

}

# 선언과 실행

 */

// 선언만 해주면 동작하지 않는것 처럼 보인다
// function showMessage() {
//   console.log("hello world");
// }

/*
heap이라는 공간이 존재
함수 선언시 heap 공간에 함수가 들어감
실행은 되지 않음
실행은 실행하는 영역이 존재함

## 코드실행 (!!!중요!!!)
저장 -> 브라우저를 킨다 -> js 파일을 브라우저가 읽어 온다 
-> 브라우저가 코드를 실행시켜 줌

브라우저가 코드를 읽고, 브라우저가 실행을 시켜줄 수 있어야 한다.
코드를 실행하려면 도구가 필요한데 브라우저 안에 있는 도구를 사용해서 실행

브라우저는 html -> css -> js
html을 받아오고 css를 받아오고 js파일을 가져오고
기능을 발동(렌더 (페이지를 그린다))
동시에 받아오는 게 아님
코드 실행 =>
브라우저가 텍스트 파일을 다 가져오고 브라우저가 텍스트 파일을 실행시키는 것
 */
// let text = "javascript";
// function showMessage() {
//   console.log("hello world");
// }

// console.log("hello world!");
/*
showMessage 함수는 힙이라는 공간에 들어감
힙이라는 공간에 함수를 집어 넣었을 뿐
힙이라는 공간에 저장만 시킴

let text = "javascript"도 힙에 들어감
 */

/*
콜스택이라는 공간이 있음
console.log는 콜스택이라는 공간에 들어감
콜스택이라는 공간은 실행할 것들이 있으면 실행을 시키면서 콜스택을 빠져나감
콜스택은 다 비워져야 하기 때문에
비워지면서 다 실행됨

그래서 콘솔창에 hello world가 출력됨
*/

// let text = "javascript";
// function showMessage() {
//   console.log("hello world");
// }

// console.log("hello world!");
// text;
/*
전체를 묶어서 한 번실행시킴 (콜스택에 들어감) 
콜스택에 빠져나오면서 한줄한줄 읽고
익명함수 브라우저가 코드를 실행시킬때 생기는 함수
익명함수가 실행되면서 코드를 읽고 잘게잘게 쪼갬

컴퓨터가 힙과 콜스택에 들어가 코드를 분리함

text는 익명함수때 실행됨
아무런 효과를 주지는 않지만 실행은 됨
*/

/*
## 힙과 콜스택
예약어에 따라 힙에 저장됨
 */

/*
힙에 있는 내용을 콜스택에 옮기는 방법
 */

// 함수 선언
// function showMessage() {
//   console.log("hello showMessage!");
// }

// console.log("hello world!");

// // 함수호출
// showMessage();
// 힙에 있는 함수가 호출이 되면서 콜스택으로 옮겨져 실행됨
// 사용한다 = 콜스택에 넣겠다
// 함수의 코드블럭 안에 있는 코드가 콜스택에 들어감

/*
뒤에 괄호 붙은것 => 함수 호출
자바스크립트가 제공해주는 함수를 호출
Number()
parseInt()
console.log()
 */

// 스택 => 선입 후출
// 위에서 부터 차곡차곡 쌓임
// 뺄때는 위에서 부터 뺌

// 콜스택에서 코드가 다 실행되면 익명함수가 사라짐

/*
1.콜스택


console.log("hello wolrd!") => 바로 빠짐
익명함수


2.콜스택

showMessage() => 빠지면서 코드블럭 안에 코드를 콜스택으로 넣음
익명함수

3.콜스택

console.log("hello showMessage!") => 빠짐
익명함수


4.콜스택

익명함수 => 빠짐
 */

// 함수 문법
// let text = "javascript";
// function showMessage() {
//   console.log("hello world! " + text);
// }

// showMessage();

// 안됨
// function showMessage() {
//   let text = "javascript";
//   console.log("hello world! " + text);
// }

// showMessage();
// console.log(text);

/* 이유

1.
힙                             콜스택


showMessage 함수                익명함수






2.
힙                             콜스택

                              showMessage() => 실행되면서 빠져나감
showMessage 함수                익명함수



3.
힙                             콜스택


                             console.log("hello world! " + text) => 실행되면서
                             힙에 있던 text를 호출함
let text = "javascript"        익명함수

4.
힙                             콜스택

                               console.log(text) => text를 호출하고 싶은데
                               힙에 없어서 오류가 남
                               익명함수
*/

// 됨

// let text;
// function showMessage() {
//   text = "javascript";
//   console.log("hello world! " + text);
// }

// showMessage();
// console.log(text);

/*
1. text = undefined
2. text = javascript
 */

// {
//   var txt = "javascript";
// }

// console.log(txt); //javascript

// {
//   let txt = "javascript";
// }

// console.log(txt); // 실행 안됨

// 실행됨 => 호이스팅에 의해서
// 자바스크립트가 전체적으로 코드를 읽어서 호이스팅을 시킨 후 코드 실행
// showMessage();
// function showMessage() {
//   let text = "javascript";
//   console.log("hello wolrd! " + text);
// }
// function이라는 예약어는 호이스팅이 됨

// 의도적으로 호이스팅을 사용하는 경우는 없음
// javascript는 prototype언어임
// prototype이기 때문에 호이스팅이 발생하게됨

// function이라는 예약어는 호이스팅이 일어나기 때문에 arrow 함수를 사용
// arrow 함수는 호이스팅이 안일어남

/*
호이스팅이 발동되는 것들은 마치 전역변수로 선언된 것 처럼 된다
 */

// 전역변수 지역변수
// 1~100까지 합 구하기

// let sum = 0;
// for (let i = 1; i < 101; i++) {
//   sum += i;
// }
// console.log(sum);

// function showMessage() {
//   console.log("hello world!");
// }

// showMessage();

// 뒤에 괄호가 붙으면 함수

// 매개변수(parameter)와 인자(argument)
/*
매개변수는 함수옆 괄호에 선언하는 변수 - 함수 내부에서만 사용할 수 있는 변수
인자는 함수호출 시 넣는 값
 */

// 함수선언 - 매개변수
// 자리가 중요함 - 인자와 위치가 맞아야함
// () 안에 변수명 만들듯이 하면됨
// function showMessage(name, age) {
//   console.log("hello " + name + " age : " + age);
// }

// 함수호출 - 인자
// 매개변수 순서 지키기
// showMessage("ingoo", 32);

// 구구단 2단
// function googoo(num) {
//   console.log(`${num}단`);
//   for (let i = 1; i <= 9; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
//   }
// }

// googoo(2);

// function print(x, y) {
//   console.log(x + " * " + y + " = " + x * y);
// }

// for (let i = 1; i <= 9; i++) {
//   print(2, i);
// }

// 매개변수 초기값 설정
// function showMessage(name = "ingoo") {
//   console.log("hello " + name);
// }

// showMessage();
// showMessage("jihyun");
// 인자를 넣어주지 않아도 default 값이 나옴
// 인자 값을 넣어주면 인자값이 나옴

/*
# return

함수 안에서만 사용하는 예약어

default로 들어가있긴 함
안쓰면 생략될 뿐 실행은 됨

return은 함수를 종료시킴
함수 내부에서 return을 만나게 되면 함수를 종료시킴
*/

// function showMessage() {
//   console.log("hello world! 1");
//   return;
//   console.log("hello world! 2");
// }

// showMessage(); // undefined

// function showMessage() {
//   return;
// }

// console.log(showMessage()); // undefined
// return 뒤에 값이 없으면 undefined가 뜸
// function showMessage() {
//   return "hello world";
// }

// console.log(showMessage()); // hello world

// function showMessage() {
//   console.log("hello world!");
//   return;
// }

// showMessage(); // hello world!
//함수 호출이 되면서 안에 있는 코드가 실행되면서 hello world 찍힘

// function showMessage2() {
//   return "hello world!";
// }
// console.log(showMessage2()); // hello world!
// return은 호출된 함수의 결과물이 "hello world!" 을 의미

// return 사용 이유
// function showMessage3(name) {
//   return "hello " + name;
// }

// console.log(showMessage3("ingoo"));

// 함수가 나타내는 데이터를 return 뒤에 붙여줌

// function getSum(x, y) {
//   return x + y;
// }

// console.log(getSum(1, 2)); //3

// 대부분 함수는 어떠한 최소단위의 동작을 만들때 사용
// 동사와 같다
// 함수명 지을때 동사 + 어떤 내용 형태로 많이 지음
// showMessage
// getName
// setName
// checkUserId
// isUserId

// function a() {
//   console.log("a 함수 호출");
//   return 1;
// }
// function b() {
//   console.log("b 함수 호출");
//   return 2;
// }
// function c() {
//   console.log("c 함수 호출");
//   return 3;
// }
// function d() {
//   console.log("d 함수 호출");
//   return 4;
// }

// const x = a(); // 1
// console.log(x); // 1
// let y = b() + c(); // 2 + 3 = 5
// y = y + d(); // 5 + 4 = 9
// console.log(y); // 9

/*
a 함수 호출
1
b 함수 호출
c 함수 호출
d 함수 호출
9
 */

// function a() {
//   console.log("a 함수 호출");
//   b();
//   return 1;
// }
// function b() {
//   console.log("b 함수 호출");
//   c();
//   d();
//   return 2;
// }
// function c() {
//   console.log("c 함수 호출");
//   return 3;
// }
// function d() {
//   console.log("d 함수 호출");
//   return 4;
// }

// a();

// a 함수 호출
// b 함수 호출
// c 함수 호출
// d 함수 호출

// function a() {
//   console.log("a 함수 호출");
//   return 1;
// }
// function b() {
//   c();
//   console.log("b 함수 호출");
//   c();
//   return 2;
// }
// function c() {
//   console.log("c 함수 호출");
//   return 3;
// }
// function d() {
//   a();
//   console.log("d 함수 호출");
//   b();
//   return 4;
// }

// d();

// a 함수 호출
// d 함수 호출
// c 함수 호출
// b 함수 호출
// c 함수 호출

// 재귀함수

// 1 ~ 100
// 변수를 저장하고 재할당을 하기 때문에 느림
// 하나씩 일일히 계산을 해서 보내고 다시 계산하는 느낌
// console.time();
// console.log("for문");
// let result = 0;
// for (let i = 0; i < 101; i++) {
//   result += i;
// }
// console.log(result);
// console.timeEnd();

// // 코드 실행 시간 구하기
// // console.time();
// // console.timeEnd();

// console.time();
// console.log("공식");
// // 그냥 계산만 하기 때문에 가장 빠름
// let n = 100;
// console.log((n / 2) * (n + 1));
// console.timeEnd();

// 재귀함수
// 힙이라는 공간을 안쓰고 콜 스택 만을 사용하기때문에 빠름
// 한번에 몰아서 처리하는 느낌
// console.time();
// console.log("재귀함수");
// function sum(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return n + sum(n - 1);
//   // 100 + 99 + 98 + ...
//   // 함수 호출을 먼저 실행됨
//   // n이 1이 될때까지 반복됨
// }

// console.log(sum(100));
// console.timeEnd();

// 맨마지막에 실행된게 실행되면서 콜 스택을 빠져나감

/* 
# 함수 사용 이유
# 함수 선언
- 호이스팅
# 함수 호출
# 매개변수 : 함수 선언시 사용하는 변수
# 인자 : 매개변수에 들어갈 값을 지정
# return : default로 맨마지막에 있음, 함수를 끝내는 역할
# 함수 호출시 () 안쓰고 console.log를 찍으면 콜스택에 있는 값이 출력됨
# 콜스택
*/

// function a() {
//   console.log("hello world!");
// }

// console.log(a);

// ƒ a() {
//     console.log("hello world!");
//   }

// 피보나치 수열
// 1 1 2 3 5 8 13 21 34 55 ...
// n1 = 1
// n2 = n1 + n0
// n3 = n2 + n1

// n = 1 => 1
// n = 2 => 1 + 0
// n = 3 => 1 + 1 = 2
// n = 4 => 1 + 1 + 2 = 4

function fibo(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(4));

/*
n = 3

fibo(3 -1) + fibo(3 - 2)
=> fibo(2) + fibo(1)
=> n = 2, n = 1 => 1 + 1

n = 4
fibo(4 - 1) + fibo(4 -2)
=> fibo(3) + fibo(2)
=> fibo(3 - 1) + fibo(3 - 2) + 1
=> fibo(2) + fibo(1) + 1
=> 1 + 1 + 1

n = 5
fibo(5 - 1) + fibo(5 -2)
=> fibo(4) + fibo(3)
=> fibo(4 -1) + fibo(4 -2) + fibo(3 -1) + fibo(3 -2)
=> fibo(3) + fibo(2) + fibo(2) + fibo(1)
=> fibo(3 -1) + fibo(3 -2) + 1 + 1 + 1
=> fibo(2) + fibo(1) + 3
=> 1 + 1 + 3
=> 5

n = 6
fibo(6 - 1) + fibo(6 -2)
=> fibo(5) + fibo(4)
=> fibo(5 - 1) + fibo(5 -2) + fibo(4 - 1) + fibo(4 - 2)
=> fibo(4) + fibo(3) + fibo(3) + fibo(2)
=> fibo(4 - 1) + fibo(4 - 2) + fibo(3 - 1) + fibo(3 - 2) + fibo(3 - 1) + fibo(3 -2) + 1
=> fibo(3) + fibo(2) + fibo(2) + fibo(1) + fibo(2) + fibo(1) + 1
=> fibo(3 - 1) + fibo(3 - 2) + 1 + 1 + 1 + 1 + 1 + 1
=> fibo(2) + fibo(1) + 6
=> 1 + 1 + 6 => 8
 */
