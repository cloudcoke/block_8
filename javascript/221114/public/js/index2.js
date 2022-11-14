// let lotto = [];
// let lottoArr = [];
// for (let i = 0; i < 45; i++) {
//   lottoArr.push(i + 1);
// }

// let index = Math.floor(Math.random() * lottoArr.length); // 0 ~ 44
// // result : 33

// lotto.push(lottoArr[index]);
// lottoArr.splice(index, 1); // 0 ~ 43

// index = Math.floor(Math.random() * lottoArr.length) // 0 ~ 43

// lotto.push(lottoArr[index])
// lottoArr.splice(index, 1)

// for (let i = 0; i < 7; i++) {
//   let index = Math.floor(Math.random() * lottoArr.length);
//   lotto.push(lottoArr[index]);
//   lottoArr.splice(index, 1);
// }

// console.log(lottoArr);
// console.log(lotto);

// 정렬
// 메소드 할용을 최대한 줄이자

// javascript 정렬 알고리즘
// 버블정렬
// 삽입정렬
// 이해 못하겠으면 모든 절렬을 다 구현해 보자

// 버블정렬
/*
0 1   0 1   0 1    0 1    0 1   0 1   0 1 
1 2   1 2   1 2    1 2    1 2   1 2
2 3   2 3   2 3    2 3    2 3
3 4   3 4   3 4    3 4
4 5   4 5   4 5
5 6   5 6
6 7


 */
const sortArr = [5, 3, 1, 6, 8, 7, 2, 4];

for (let i = 0; i < sortArr.length - 1; i++) {
  let temp;
  for (let j = 0; j < sortArr.length - i - 1; j++) {
    // j 하는 역할, j+1 하는 역할
    // j ; 5, j  + 1 : 3
    if (sortArr[j] > sortArr[j + 1]) {
      temp = sortArr[j];
      sortArr[j] = sortArr[j + 1];
      sortArr[j + 1] = temp;
    }
  }
  console.log(i, sortArr);
}
console.log(sortArr);

// 몇단인가
// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 9 - (i - 2); j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
//   console.log("======");
// }

// [5, 3, 4] => [3, 5, 4]
// const arr2 = [5, 3, 4];

// let temp = arr2[0]; // 5
// arr2[0] = arr2[1]; // [3, 3, 4]
// arr2[1] = temp; // [3, 5, 4]
// console.log(arr2);
