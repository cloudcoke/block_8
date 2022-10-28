/*
연산자
+ - * / %
+ 제외하고
Number로 변환되서 계산됨
 */

/*
단항 산술연산자
++ --
 */
// let num = 1;
// num++; // num = num + 1

// console.log(num);

// 연산자를 만나면 연산자를 먼저처리한다고 볼 수 있다
// 대입연산자를 만나면 왼쪽에서 오른쪽으로 읽던걸 반대로 읽는다 볼 수 있음
// 대입연산자를 만나면 오른쪽을 먼저 처리하고 그 값을 왼쪽에 대입함

// num--;
// console.log(num);

// let num2 = 4;

// 값호출 후 증가
// console.log(num2++);
// console.log(num2);

// 선증가 후 값호출
// console.log(++num2);

// console.log(--num2); //3
// console.log(num2++); // 3
// console.log(num2--); // 4
// console.log(++num2); // 4
// console.log(num2); // 4

/*
+=
-=
*=
/=
%=

num = num + 5 
num = num - 5
num = num * 5
num = num / 5
num = num % 5
 */

// let num3 = 5;

// num3 += 3; // num3 = num3 + 3

// console.log(num3);

// num3 -= 5;

// console.log(num3); // num3 = num - 3

// num3 *= 2;

// console.log(num3);

// 비교연산자 (!중요!)
// 데이터타입
// 1. number
// 2. string
// 3. boolean
/*

//비교연산자를 사용하면
// 결과물을 boolean 타입으로 반환한다
1,      0 = 1bit
참,     거짓
true,   false

5 > 3   결과:1
3 > 5   결과:0
*/

let num4 = 10;
let num5 = 11;

/*
==
1 == 1

a == b 비교하지만 (값만)
a === b a b 비교하고, 데이터 타입까지 비교함

===를 쓰는게 기본임 ==보다 ===를 쓰는걸 권장

a != b
a !== b
*/
console.log(1 == 1); // 1과 1은 같은가? true
console.log(Number(1 == 1)); // 1

console.log(1 == "1"); // true
console.log(1 === "1"); // false

console.log(1 != 1); // 1과 1은 다른가? false
console.log(1 !== 1); // false
console.log(1 != "1"); // false
console.log(1 !== "1"); // true

console.log(1 == true); // true
console.log(1 === true); // false
console.log(0 == false); // true
console.log(0 === false); // false

// 대소관계
// > , < , >= , <=
// 1 > 2 false
// 1 < 2 true
// 1 >= 2 false
// 1 <= 2 true
// 2 >= 2 true
// 2 <= 2 true

console.log(1 > 2);
console.log(1 < 2);
console.log(1 >= 2);
console.log(1 <= 2);
console.log(2 >= 2);
console.log(2 <= 2);

// 조건문 if문
/*
비교를 함 (true, false)
true 일때는 A라는것을 console.log
false 일때는 B라는것을 console.log

기본 골격 + else
() 안에있는 내용 => boolean
if () {

} else {

}

비교연산자와 많이 사용됨
*/

// if (boolean) {
//   // true 일때 실행
// } else {
//   // false 일때 실행
// }

// if (1 > 2) {
//   // true 일때 실행
//   console.log("Hello world!");
// } else {
//   console.log("false");
// }

// 연산자는 먼저 실행됨
// num10 = 1 + 1;
// console.log(num10);

// 반복문
// 3가지 값이 존재
// 1. 초기값 - 변수 선언후 할당
// 2. 종료조건 - boolean 비교연산자
// 3. 증감값
// for (1.초기값; 2.종료조건; 3.증감값) {

// }

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   console.log("hello world");
// }

/*
1
hello world
2
hello world
3
hello world
4
hello world
5
hello world
6
hello world
7
hello world
8
hello world
9
hello world
10
hello world
*/
/*
1~10까지 찍는데
4의 배수에서
console.log('hello world!)
*/

// || 연산자
// true  || true => true
// true || false => true
// false || false => false

for (i = 1; i <= 10; i++) {
  if (i % 4 === 0) {
    console.log("hello world!");
  } else {
    console.log(i);
  }
}
// 연산자 먼저 계산되고 비교 연산자가 동작

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

for (let i = 1, a = "*"; i <= 10; i++) {
  console.log(a);
  a += "*";
}
