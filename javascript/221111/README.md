# 경일게임 아카데미 visual, gnb

HTML, CSS
슬라이드 효과 주기

1overflow: hidden;
자식영역이 부모 요소보다 커도
부모 요소만큼만 보이겠다

자주하는 실수

```js
const visual = document.querySelector("#visual");
console.log(visual); // null
function init() {}

document.addEventListener("DOMCOntentLoaded", init);
```

classList.add()
// class="a b c"
// "a b c".split(" ") => ["a", "b", "c"] => classList
// classList add, remove
// ["a", "b", "c"] a => 0
// ["a", "b", "c"].splice(0, 1) => ["b", "c"]
classList.remove()
// ["a", "b", "c"].add("d")
// ["a", "b", "c"].push("d")

```js
function init() {
  const visual = document.querySelector("#visual"); // Element
  const imgs = document.querySelectorAll("#visual > li"); // Array -> Element[] -> [Element, Element]

  // setInterval
  function slide() {
    // 첫번째 엘리먼트 class off
    // 두번째 엘리먼트 class on
    imgs[0].classList.add("off");
    // imgs[0].className = "off"
    imgs[1].classList.add("on");
    // imgs[1].className = 'on'
  }

  // setInterval:number
  const intervalId = setInterval(slide, 3000);
}

document.addEventListener("DOMContentLoaded", init);
```

```js
function init() {
  const visual = document.querySelector("#visual"); // Element
  const imgs = document.querySelectorAll("#visual > li"); // Array -> Element[] -> [Element, Element]
  let count = 0;

  // setInterval
  function slide() {
    console.log(count % 2 === 0);
    if (count % 2 === 0) {
      imgs[0].className = "off";
      imgs[1].className = "on";
      //   imgs[0].classList.add("off");
      //   imgs[1].classList.add("on");
    } else {
      imgs[0].className = "on";
      imgs[1].className = "off";
      //   imgs[0].classList.add("on");
      //   imgs[1].classList.add("off");
    }
    // console.log(count);
    count++;
    /*
    0,1
    0: off
    1: on

    0: on
    1: off

    0: off
    1: on
    ...
     */
  }

  // setInterval:number
  const intervalId = setInterval(slide, 3000);
}

document.addEventListener("DOMContentLoaded", init);
```

---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="public/css/index.css" />
    <script src="public/js/index.js"></script>
  </head>
  <body>
    <ul id="visual">
      <li><img src="http://www.kiweb.or.kr/nBoard/upload/file/main/1663647850_20800_1.jpg" alt="" /></li>
      <li><img src="http://www.kiweb.or.kr/nBoard/upload/file/main/1661838619_28666_1.png" alt="" /></li>
    </ul>
  </body>
</html>
```

```css
* {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}

#visual {
  position: relative;
  width: 1900px;
  height: 500px;
  margin: 0 auto;
  overflow: hidden;
}

#visual > li {
  position: absolute;
  transition: all 1s ease;
}

#visual > li:nth-child(1) {
  left: 0px;
}
#visual > li:nth-child(2) {
  left: 1920px;
}

#visual > li.on {
  left: 0px;
}
#visual > li.off {
  left: -1920px;
}
```

```js
function init() {
  const visual = document.querySelector("#visual"); // Element
  const imgs = document.querySelectorAll("#visual > li"); // Array -> Element[] -> [Element, Element]
  let count = 0;

  // setInterval
  function slide() {
    if (count % 2 === 0) {
      imgs[0].style = "left:1920px; transition: none;";
      imgs[0].className = "off";
      imgs[1].className = "on";
      imgs[1].style = "left:0; transition: all 1s";
    } else {
      imgs[0].style = "left:0; transition: all 1s";
      imgs[0].className = "on";
      imgs[1].className = "off";
      imgs[1].style = "left:1920px; transition: none;";
    }
    // console.log(count);
    count++;
  }

  // setInterval:number
  const intervalId = setInterval(slide, 3000);
}

document.addEventListener("DOMContentLoaded", init);
```

---

방법 1

```js
function init() {
  const visual = document.querySelector("#visual"); // Element
  const imgs = document.querySelectorAll("#visual > li"); // Array -> Element[] -> [Element, Element]
  let count = 0;

  // setInterval
  function slide() {
    // class on
    imgs[count].className = "on";
    for (let i = 0; i < imgs.length; i++) {
      if (i === count) {
        imgs[i].className = "on";
      } else {
        imgs[i].className = "";
      }
    }

    count++;
    if (count === 3) {
      count = 0;
    }
  }

  // setInterval:number
  const intervalId = setInterval(slide, 3000);
}

document.addEventListener("DOMContentLoaded", init);
```

    // let prev = 0;

    // if (count === 0) {
    //   prev = imgs.length - 1;
    // } else {
    //   prev = count - 1;
    // }

          // 현재 내가 on 된 인덱스가 어디냐
      //   let prev = index === 0 ? imgs.length - 1 : index - 1;
      //   imgs[index].className = "on";
      //   imgs[prev].className = "";

고차함수
함수안에서 함수를 리턴하는 함수
고차함수 사용하는 이유는 핸들러 함수에는 매개변수를 1개밖에 넣지 못하기 때문이다
내가 받고 싶어하는 매개변수를 받고 내가 리턴할 익명함수에게 인덱스를 전달했다

구현한 기능은 버튼을 클릭했을때 내가 클릭한 버튼의 번호를 알 수 있는 상태

1번이 선택되어있고, 버튼 3번을 클릭하면

1번을 class="", 3번을 class="on"

class="on" 달려있는 엘리먼트의 인덱스를 가져온다
내가 클린한 버튼의 인덱스를 가져온다

속성의 값들을 가져온다
Element.getAttribute()

```html
<input type="text" />
```

```js
input.getAttribute("type"); // text
```

```js
let intervalId = 0;
let count = 0;

function init() {
  const imgs = document.querySelectorAll("#visual > li"); // Array -> Element[] -> [Element, Element]
  const btns = document.querySelectorAll("#visualBtn > li"); // Element[]
  const preBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  function findIndex() {
    for (let i = 0; i < imgs.length; i++) {
      console.log(imgs[i].getAttribute("class"));
      if (imgs[i].getAttribute("class") === "on") return i;
    }
  }
  // setInterval
  function slide() {
    // class on

    let prev = count === 0 ? imgs.length - 1 : count - 1;

    imgs[count].className = "on";
    imgs[prev].className = "";

    if (++count === 3) count = 0;
  }

  // setInterval:number

  // 버튼 영역
  // Event
  // Element 가져오기 querySelectorAll()

  function btnHandler(index) {
    return function (e) {
      clearInterval(intervalId);
      const current = findIndex();

      imgs[current].className = "";
      imgs[index].className = "on";
      count = index;
      intervalId = setInterval(slide, 3000);
    };
  }

  function prevHandler(e) {
    clearInterval(intervalId);
    const current = findIndex();
    const index = current === 0 ? imgs.length - 1 : current - 1;
    imgs[current].className = "";
    imgs[index].className = "on";
    count = index;
    intervalId = setInterval(slide, 3000);
  }

  function nextHandler(e) {
    clearInterval(intervalId);
    const current = findIndex();
    const index = current === imgs.length - 1 ? 0 : current + 1;
    imgs[current].className = "";
    imgs[index].className = "on";
    count = index;
    intervalId = setInterval(slide, 3000);
  }

  for (let i = 0; i < btns.length; i++) {
    // btns[i] Element
    btns[i].addEventListener("click", btnHandler(i));
  }

  preBtn.addEventListener("click", prevHandler);
  nextBtn.addEventListener("click", nextHandler);

  slide();
  intervalId = setInterval(slide, 3000);
}
document.addEventListener("DOMContentLoaded", init);
```

## 실행순서

```js
let intervalId = 0;
let count = 0;
```

**event**

1. DomContentLoaded => HTML 로드가 끝났을 때 딱 1번
2. init() 함수 호출

**init() 함수 내부 안에서**

1. Element 내용들 가져오기
2. 함수선언 하기

   1. findIndex :
   2. slide : count 변수에 있는 인덱스를 `class="on"` 달아주고, 달린 이전에 값을 `class="" `로 만들어 준다. count 1씩 증가 시킨다
   3. btnHandler :
   4. prevHandler :
   5. nextHandler :

3. 이벤트 등록

   1. Btns에 있는 모든 엘리먼트를 `click` 이벤트를 줌
   2. prev, next 엘리먼트에게 `click` 이벤트를 줌

4. slide() 호출

5. setInterval() 실행 - 비동기 [이벤트 루프]
   - setInterval에 `return` 값을 intervalId 변수에 대입한다.
   - Background라는 공간에 3초마다 `slide`를 실행시킴

사용자가 클릭을 해야지만 실행됨

6. btnHandler
   목적 : 내가 클릭한 버튼이 어떤 버튼인가 알기위함
   ** 고차 함수**

```js
function fn(index) {
  return function (e) {
    console.log(index, e);
  };
}
Element.addEventListener("click", fn(1));
```

`addEventListener` 장점은 하나의 함수로 여러 엘리먼트에게 이벤트를 등록이 가능

속성으로 부여할 시 이렇게 작성됨

```js
btns[0].onclick = function () {
  // 1
};
btns[1].onclick = function () {
  // 2
};
btns[2].onclick = function () {
  // 3
};
```

```js
function handlr() {
  // 애가 몇번 버튼이냐?
  btns[0].onclick = handler;
  btns[1].onclick = handler;
  btns[2].onclick = handler;
}
```

0, 1, 2를 전달하고 싶다

```js
function handelr(index) {
  // 애가 몇번 버튼이냐?
  return undefined;
}
btns[0].onclick = handler; // undefined
btns[1].onclick = handler; // undefined
btns[2].onclick = handler; // undefined
```

그렇다면.. 함수를 실행해서 함수를 리턴한다면?

```js
function handler(i) {
  return function () {
    console.log(i); // 오 너 0번 버튼이구나
  };
}
btns[0].onclick = handler(0); // 함수
btns[1].onclick = handler(1); // 함수
btns[2].onclick = handler(2); // 함수
```

내가 클릭한 버튼의 인덱스로 count 값이 바뀌길 원해

```js
imgs[index].className = "on";
```

문제 발생

기존에 있던 `class="on"`이 지워지지 않음

첫번째 방법이
반복문을 통해서 문제를 해결했습니다.

```js
const arr = ["경일", "게임", "아카데미"];
const search = "게임";
```

// arr 배열안에서 게임빼고 다 출력해주세요.

```js
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== search) {
    console.log(arr[i]);
  }
}
```

우리가 슬라이드할 엘리먼트들은 모두 배열을 담고 있었고,
우리는 버튼의 인덱스번호도 알고 있었어요

```js
function btnHandler(index) {
  return function () {
    for (let i = 0; i < imgs.lenght; i++) {
      if (i === index) {
        imgs[i].className = "on";
      } else {
        imgs[i].className = "";
      }
    }
  };
}
```

반복문을 통해서 처리는 했지만, 문제는 만약에 내가 40개를 돌려야 되는 상황이라면
너무 `비효율적`

내가 class="on"이 달려있는 index번호를 알 수 있다면
참 쉬울텐데

**element.getAttribute()**

```html
<input type="text" />
```

```js
const input = document.querySelector("type"); // result: text
```

이 메서드를 활용해서 `findIndex()`라는 함수를 제작했음

```js
const arr = ["경일", "게임", "아카데미"];
const search = "게임";

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === search) {
    console.log(i); // 인덱스 값
  }
}
```

```js
function findIndex() {
    for (let i = 0; i < imgs.length; i++) {
      if (imgs[i].getAttribute("class") === "on") return i;
    }
```

**btnHandler의 비효율적인 문제를 findeIndex 함수 제작으로 해결**

```js
function btnHandler(index) {
  return function (e) {
    const current = findIndex();

    imgs[current].className = "";
    imgs[index].className = "on";
    // count = index;
  };
}
```

**btnHandler의 count 변수 재할당**

3초마다

```js
let count = 1; // 3초마다 증가 0 ~ 2
```

- 0 :
- 1 : class = "on"
- 2 :

```js
function btnHandler(index) {
  return function (e) {
    const current = findIndex();

    imgs[current].className = "";
    imgs[index].className = "on";
    count = index;
  };
}
```

**클릭시 setInterval에 의해 다시 돌아가는 현상 해결**

```js
function btnHandler(index) {
  return function (e) {
    clearInterval(intervalId);
    const current = findIndex();

    imgs[current].className = "";
    imgs[index].className = "on";
    count = index;
    intervalId = setInterval(slide, 3000);
  };
}
```
