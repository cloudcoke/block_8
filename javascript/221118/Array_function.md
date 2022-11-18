# forEach

- 주어진 함수를 배열 요소 각각에 대해 실행

```js
arr.forEach(callback(value, [index], [array]), [thisArg]);
```

**매개변수**

- callback : 각 요소에 대해 실행할 함수
  - value : 처리할 현재 요소
  - index : 처리할 현재 요소의 인덱스
  - array : forEach()를 호출한 배열
- thisArg : callback을 실행할 때 this로 사용할 값

**반환값**

- undefined / 없음

## for문을 forEach()로 바꾸기

**for문**

```js
const items = ["item1", "item2", "item3"];
const copy = [];

for (let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}

console.log(copy);
```

**forEach()문**

```js
const items = ["item1", "item2", "item3"];
const copy = [];

items.forEach(function (item) {
  copy.push(item);
});

console.log(copy);
```

**thisArg 사용**

```js
function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function (array) {
  array.forEach(function (entry) {
    this.sum += entry;
    ++this.count;
  }, this);
};

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count);

console.log(obj.sum);
```

this 매개변수를 forEach()에 제공해 callback 함수에서 전달받은 this를 값으로 사용가능

# filter

- 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열을 반환

```js
arr.filter(callback(element, [index], [array]), thisArg);
```

**매개변수**

- callback : 요소를 테스트할 함수, true 반환시 요소 유지/false 반환시 버림
  - element : 처리할 현재 요소
  - index : 처리할 현재 요소의 인덱스
  - array : filter를 호출한 배열
- thisArg : callback 실행할 때 this로 사용하는 값

**반환값**

- 테스트를 통과한 요소로 이루어진 새로운 배열
- 어떤 요소도 테스트를 통과하지 못했으면 빈 배열

## 모든 작은 값 걸러내기

- 값이 10 이하인 모든 요소가 걸러진 배열을 만듬

```js
function isBigEnough(value) {
  return value >= 10;
}

const filter = [12, 5, 8, 130, 44].filter(isBigEnough);

console.log(filter);
```

# some

- 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트
- 빈 배열에서 호출하면 무조건 false를 반환

```js
arr.some(callback, [thisArg]);
```

**매개변수**

- callback : 각 요소를 시험할 함수
  - index : 처리할 현재 요소의 인덱스
  - array : some()을 호출한 배열
- thisArg : callback을 실행할 때 this로 사용하는 값

**반환값**

- 어떤 배열의 요소라도 callback 함수의 시험 결과가 참인 값을 반환하면 true
- 그 외에는 false

- callback이 참을 반환하는 요소를 찾을 때까지 배열에 있는 각 요소에 대해 한 번씩 callback 함수를 실행
- 해당하는 요소를 발견하면 some은 즉시 true를 반환
- 모든 값이 false를 반환하면 false를 반환

## 배열의 요소 테스트

- 배열 내 요소 중 하나라도 10보다 큰지 판별

```js
console.log([2, 5, 8, 1, 4].some((elem) => elem > 10));
console.log([12, 5, 8, 1, 4].some((elem) => elem > 10));
```

# map

- 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

```js
arr.map(callback(value, [index], [array]), [thisArg]);
```

**매개변수**

- callback : 새로운 배열 요소를 생성하는 함수
  - value : 처리할 현재 요소
  - index : 처리할 현재 요소의 인덱스
  - array : map()을 호출한 배열
- thisArg : callback을 실행할 때 this로 사용되는 값

**반환값**

- 배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열

- callback 함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만듬

## 배열에 들어있는 숫자들의 제곱근을 구하여 새로운 배열을 만들기

```js
const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);

console.log(roots);
console.log(numbers);
```

```js
function returnInt(element) {
  return parseInt(element, 10);
}

console.log(["1", "2", "3"].map(returnInt));
console.log(["1", "2", "3"].map((str) => parseInt(str)));
console.log(["1", "2", "3"].map(Number));
```

reduce
