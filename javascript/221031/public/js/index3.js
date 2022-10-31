/*
데이터 타입
    - 원시 타입
        - 숫자(number)
        - 문자열(string)
        - 불리언(boolean)
        - undefined : 선언 후 암묵적으로 할당되는 값
        - null : 의도적으로 값이 없다라는 것을 명시할때 사용
        - Symbol : ES6에서 생긴 타입
    - 객체 타입
        - 배열
        - 객체
        - 함수
        - ...
 */

// let num;
// console.log(num); //undefined
// undefined 선언을 하고 아무 값도 할당하지 않으면 자동으로 들어감

let a = 10;
let b = "hello";
// 변수 하나에는 하나의 데이터만 들어감

// 하나의 변수에 여러 데이터를 넣고 싶을 경우
// 배열, 객체
let c = [10, "hello"];
console.log(c);

console.log(b + a); //hello10
console.log(c[0]); // 10
console.log(c[1]); // hello
console.log(c[1] + c[0]); // hello10
console.log(c.length);
// 배열의 인덱스 c[index]
// 배열의 c라는 주소에서 몇번째 인덱스를 사용할지 선택
// 배열의 사용 이유
// 같은 성향의 데이터들을 하나의 변수에 묶어놓고 모아놓는다면 관리가 편하기 때문이다
// 배열은 객체 타입임

let d = [1, 2, 2, 3, 4, 4, 6];
console.log(d[2]);
console.log(d[5]);
console.log(d[1] + d[6]);

let test = [5, "hi"];
let test2 = ["bye", 0];
console.log(test + test2); //5,hibye,0 ???

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr에 있는 변수를 하나씩 다 출력하세요
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]); // undefined 자바스크립트는 범위를 넘어도 undefined로 출력됨
console.log("---------");
// 0~7까지 출력하는 반복문
for (let i = 0; i < 8; i++) {
  console.log(i);
}

console.log("---------");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for ~가 false일 때까지
// while ~가 true인 동안

// length 사용이유
// 배열의 길이가 변하게 되면 코드가 바뀌어야 하지만 length를 사용하면 그 수고를 덜 수 있다

console.log("---------");
// 구구단
for (let i = 0; i < arr.length; i++) {
  // 2 * {1} = {2}
  // 2 * {2} = {4}
  console.log("2 * " + arr[i] + " = " + 2 * arr[i]);
}

console.log("---------");
// 2중 for문
// for ()안에 있는것은 지역변수 for {} 안에서만 동작함
for (let i = 1; i < 5; i++) {
  console.log("menu" + i);
  for (let j = 1; j < 5; j++) {
    console.log("  submenu" + i + "-" + j);
  }
}

// menu1
//  submenu1-1
//  submenu1-2
//  submenu1-3
//  submenu1-4
// menu2
//  submenu2-1
//  submenu2-2
//  submenu2-3
//  submenu2-4
// menu3
//  submenu3-1
//  submenu3-2
//  submenu3-3
//  submenu3-4
// menu4
//  submenu4-1
//  submenu4-2
//  submenu4-3
//  submenu4-4

// 비슷한 느낌
/* <ul>
<li>menu1
  <ul>
    <li>menu1-1</li>
    <li>menu1-2</li>
    <li>menu1-3</li>
    <li>menu1-4</li>
  </ul>
</li>
<li>menu2</li>
<li>menu3</li>
<li>menu4</li>
</ul> */

console.log("---------");
let arr2 = [2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
  for (let j = 1; j < 10; j++) {
    console.log(arr2[i] + " * " + j + " = " + arr2[i] * j);
  }
}
// 배열의 요소는 가변적이다
