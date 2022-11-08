//
//                   6  7
//               5      6
//             2        5
//          1           2
let arr = [2, 5, 6, 7, 1];
let arr2 = [4, 1, 6, 8, 2];
// 버블정렬
function bubbleSort(arr) {
  let before = 0;
  let after = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] < arr[j]) {
        before = arr[i];
        after = arr[j];
        arr.splice(j, 1, before);
        arr.splice(i, 1, after);
        console.log(arr);
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));
