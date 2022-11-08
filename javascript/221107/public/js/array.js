// 배열 참조

// 배열 0: number
//      1: 'string'
// 이런 형태로 넣는거는 추천하지 않음 이런 형태는 객체가 낫다
// 배열에는 하나의 타입만 넣도록 하자

// 만드는 방법
// const arr = []; // 인스턴스
// const arr2 = new Array(); // 배열 리터럴
// const arr2 = [];

// console.log(arr === arr2); // false

// const arr = ["apple", "banana", "orange"];

// apple
// orange
// banana
// 총배열 갯수
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[1]);
// console.log(arr.length);

// 순서대로
// apple
// banana
// orange
// 단 for문 사용
// for (let element of arr) {
//   console.log(element);
// }

// for (let a in arr) {
//   console.log(a); // 0, 1, 2
// }

// const a = { name1: 1, name2: 2, name3: 3 };

// 4번째 요소를 추가하고 싶다
// arr[3] = "melon";
// console.log(arr);

// arr.push("melon"); // 맨 마지막 요소에 추가됨
// console.log(arr);

// 1 ~ 100까지를 배열에 담고 싶다
// const arr3 = []; // length:0
// for (let i = 0; i < 100; i++) {
//   arr3[i] = i + 1;
// }

// for (let i = 1; i <= 100; i++) {
//   arr3.push(i);
// }
// console.log(arr3);

// arr3.pop();
// console.log(arr3);

// arr.pop(); // 배열의 마지막요소를 삭제
// console.log(arr);

// arr.push("melon");
// console.log(arr);

// splice
// arr4 = [1, 2, 3, 4, 5, 6];

// 인자1: 삭제할 인덱스 값
// 인자2: 삭제할 요소 갯수
// arr4.splice(2, 3); // [1,2,6]
// arr4.splice(arr4.indexOf(3), 3); // [1,2,6]
// arr4.splice(2, 1);
// console.log(arr4); // [1,2,4,5,6]

// slice
// 인자1: 삭제를 시작할 인덱스 값
// 인자2: 삭제를 종료할 인덱스 값(미만)
// const arr5 = arr4.slice(2, 4);
// console.log(arr4);
// console.log(arr5);

// splice는 직접 바꿔줌 (원본이 변경됨)
// slice는 참조형태를 새롭게 만들어서 리턴 (원본이 변경되지 않음) => 잘안씀 스프레드 연산자[...]를 사용하기 때문

// 선형 검색 (Linear search) 완전탐색 - 알고리즘
// 찾고싶은 배열에 다 대입을 해서 찾는 것
// 배열이 10이면 10번 반복해서 찾는것?
// length : 10
// [10, 6, 3, 8, 21, 5, 8, 12, 99, 7]
// 값이 5인 녀석 index가 몇 번이야?
// 단 값이 없을 경우에는 -1을 출력
// arr6 = [10, 6, 3, 8, 21, 5, 8, 12, 99, 7];
// console.log(arr6.indexOf(5)); // 5
// console.log(arr6.indexOf(100)); // -1

// function linearSearch(array, target) {
//   const length = array.length;

//   for (let i = 0; i < length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// const search1 = linearSearch(arr6, 21);
// console.log(search1); // 4
// const search2 = linearSearch(arr6, 99);
// console.log(search2); // 8
// const search3 = linearSearch(arr6, 8);
// console.log(search3); // 3
// const search4 = linearSearch(arr6, 100);
// console.log(search4); // -1

// console.log(Math.random()); // 0.0 ~ 0.9 랜덤값
// console.log(Math.floor(Math.random() * 45)); // 소수점 반올림

// 로또
// 1. 1 ~ 45까지 배열에 담기
// 2. 랜덤 숫자로 6개 뽑기
// 2.1 랜덤 숫자를 6번 뽑기

const lottoNumber = []; // 1 ~ 45
const result = []; // 랜덤 6개
const lottoBox = document.querySelectorAll("#gnb > li");

for (let i = 1; i <= 45; i++) {
  lottoNumber.push(i);
}

for (let i = 0; i < 6; i++) {
  const number = Math.floor(Math.random() * 45) + 1;
  //   lottoNumber[number - 1]; // 22 => index: 21

  lottoNumber.splice(number - 1, 1);
  result.push(number);
}

for (let i = 0; i < result.length; i++) {
  lottoBox[i].innerHTML = result[i];
}
