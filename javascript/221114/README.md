# Menu, Visual

메뉴를 만들때 중요한건 공간임
메뉴와 서브메뉴가 한 공간인가
마진보다는 패딩을 사용하는 게 중요
리플

```html
<ul id="gnb">
  <li>
    <a href="#">menu1</a>
    <ul class="snb">
      <li><a href="#">menu1-1</a></li>
      <li><a href="#">menu1-2</a></li>
      <li><a href="#">menu1-3</a></li>
      <li><a href="#">menu1-4</a></li>
    </ul>
  </li>
</ul>
```

```css
#header > #gnb > li > .snb > li + li {
}
```

맨 위 li 빼고 다음부터 선택됨
첫번째꺼 빼고 선택

```css
#header > #gnb.on > li > .snb {
  display: block;
}
```

gnb에 on이라는 클래스가 달려 있다면 li > .snb가 display: block이 되게함

# 이벤트 버블링

---

## 메서드 사용할때 리턴 값이 없는 것과 있는 것

# Javascript

무엇을 만들때 순서 정의

`array`, `object`

1. array, object를 잘 다루려면
   - 반복문
   - 조건문

로또 만드는데

1. 배열에다가 6개 숫자를 중복되지 않게 뽑기

랜덤으로 뽑은 숫자가 기존에 뽑았던 숫자와 같은게 있는지 체크하는것이 어려웠음

내가 뽑은 숫자가 무조건 중복되지 않는 거라면 쉽지 않을까?

```js
let lotto = [];
let lottoArr = [];
for (let i = 0; i < 45; i++) {
  lottoArr.push(i + 1);
}

// let index = Math.floor(Math.random() * lottoArr.length); // 0 ~ 44
// // result : 33

// lotto.push(lottoArr[index]);
// lottoArr.splice(index, 1); // 0 ~ 43

// index = Math.floor(Math.random() * lottoArr.length) // 0 ~ 43

// lotto.push(lottoArr[index])
// lottoArr.splice(index, 1)

for (let i = 0; i < 7; i++) {
  let index = Math.floor(Math.random() * lottoArr.length);
  lotto.push(lottoArr[index]);
  lottoArr.splice(index, 1);
}

console.log(lottoArr);
console.log(lotto);
```

버블 정렬의 단점

정렬이 끝나도 계속 정렬하려고 함

## 로또 번호 생성 배열 만들기

## 배열에 있는 숫자를 정렬 알고리즘 (반복문)
