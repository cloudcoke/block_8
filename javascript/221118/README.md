# 게시판

    화면구성도 그려보기
    게시판 수정 페이지 제작

흐름

게시판은 흐름이 중요하다

리스트는 로컬 스토리지에서 데이터를 가져오고 값이 null이면 빈 배열을 생성해줘야 함

글쓰기는 로컬 스토리지에 데이터를 넣어주기만 하면 됨 하지만 로컬 스토리지는 기본적으로 데이터를 string으로 밖에 저장을 못함 그래서 로컬스토리지에서
데이터를 가져와서 JSON.parse로 변환을 한 다음 끼워넣은 다음 다시 string으로 변환을 해서 로컬스토리지에 넣어줘야 함

<!-- 만약 push 메서드가 오류가 났다면 그 이전 코드를 살펴보자 -->

글보기 - 쿼리 스트링이 존재함
변수가 공유가 안되기 때문에 url에 데이터를 넘겨줘야 함
글보기는 로컬스토리지에서 데이터를 가져오기만 함 만약 조회수를 구현한다면 데이터를 로컬스토리지에 넘겨주는 작업도 필요

하나의 페이지에서 로직을 구현할 때 글을 작성한 다음 구현
흐름이 필요할 때는 그림을 그린 다음 구현

# 배열 함수

```js
const arr2 = [2, 7, 5, 4, 5];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}
```

배열은 for문이랑 짝꿍
배열 메서드는 반복을 돌려주는 함수들이 많다
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
forEach
filter
some
map
reduce
...

## Array.prototype.forEach()

```js
const arr = [2, 7, 5, 4, 5];

arr.forEach(function (value, index) {
  console.log(value, index);
});

let obj = {
  arr: [2, 7, 5, 4, 5],
  length: 5,
  forEach: function (callback) {
    for (let i = 0; i < obj.length; i++) {
      callback(obj.arr[i], i);
    }
  },
};

function loop(value, index) {
  console.log(obj.length, value, index);
}

obj.forEach(loop);
```

단점 : 반복문을 멈출 수가 없음

```js
const arr = [2, 7, 5, 4, 5];
arr.forEach(function (value, index) {
  if (index === 3) return;
  console.log(value, index);
});
```

=> 인덱스가 3인 부분만 안찍힘
콜백함수가 끝나는 거지 forEach가 끝나는게 아님

```js
[1, 2, 3, 4, 5].forEach((v, i) => {
  console.log(v, i);
});
```

```js
let obj = {
  arr: [2, 7, 5, 4, 5],
  length: 5,
  forEach: function (callback) {
    for (let i = 0; i < obj.length; i++) {
      callback(obj.arr[i], i);
    }
  },
  filter: function (callback) {
    const newArr = [];

    for (let i = 0; i < obj.length; i++) {
      const bool = callback(obj.arr[i], i);
      if (bool) {
        newArr.push(obj.arr[i]);
      }
    }
    return newArr;
  },
};

const newArr = obj.filter((v, i) => {
  return v === 5;
});

console.log(newArr);
```

**Array.prototype.filter()**

```js
const arr = [2, 7, 5, 4, 5];

const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 5) arr2.push(arr[i]);
}

console.log(arr2);
```

```js
const arr = [2, 7, 5, 4, 5];
const arr2 = arr.filter((v) => {
  return v === 5;
});
console.log(arr2);
```

```js
const arr = [2, 7, 5, 4, 5];
const arr2 = arr.filter((v) => v === 5);
console.log(arr2);
```

!새로운 배열을 반환한다! 기존값은 유지

# 다음주

Linux & Git & Github

버전 형상관리 툴
Git
