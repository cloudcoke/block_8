# 댓글

## 필요한 것

1. 댓글 입력칸
2. 쓰기 버튼
3. 입력한 댓글 리스트

### Create

1. 댓글 입력
2. 입력된 댓글 저장

### Read

1. 저장된 댓글을 가져와서 보여줌

???

```js
const submitBtn = document.querySelector("#comment-input-container");

function submitBtnHandler(e) {
  e.preventDefault();
  console.log(e.target.comment); // 어떻게 이렇게 쓰는가
  console.dir(e.target.elements.comment);
  console.dir(e.target.elements);
}

submitBtn.addEventListener("submit", submitBtnHandler);
```

```js
const submitBtn = document.querySelector("#comment-input-container");
const list = [];

class Template {}

function submitBtnHandler(e) {
  e.preventDefault();
  console.log(e.target.comment); // prototype 상속때문에 가능
}

submitBtn.addEventListener("submit", submitBtnHandler);
```
