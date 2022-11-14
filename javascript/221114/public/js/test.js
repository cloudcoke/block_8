function bubleSort(arr) {
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const arr1 = [1, 7, 9, 2, 8];
const arr2 = [2, 9, 1, 3, 6];

console.log(bubleSort(arr1));
console.log(bubleSort(arr2));

/*
1회차 2회차 3회차 4회차 5회차
0 1   0 1   0 1   0 1   0 1
1 2   1 2   1 2   1 2
2 3   2 3   2 3
3 4   3 4
4 5
 */
