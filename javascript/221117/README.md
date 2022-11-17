# 댓글 만들기

- submitHandler의 역할

  - state:[]에 데이터를 쌓는 것

- instance: Object

  - new Comment(value)

- value : input 박스에 작성한 내용

```js
state = []

const instance = {
    userid:"web7722",
    content:"input박스 내용"
    updated: false
    now: '현재날짜'
}

addComment(instance)

state.push(instance)
/* [] =>
this.userid = "web7722";
this.Content = content;
// this.date = "2022-11-16";
this.updated = false;
this.now = new Date();
*/
```

create 끝

read는 drawing에서 시작

## drawing() 역할

배열안에 있는 객체를 DOM으로 바꿔줌

state 배열 안에 있는 객체를 Element로 바꿔줌

내가 화면에 무언가를 바꾸고 싶다

<!-- R,U,D -->

1. state 변수에 있는 내용을 수정한다.
2. state 변수에 있는 내용으로 화면을 만든다.
   데이터가 바뀌면 화면이 바뀐다
   화면을 바꾸고 싶으면 데이터를 먼저 바꾸고 화면을 그린다

update
this.updated가 true가 되면
수정된 결과를 반영하고
다시 그림

delete
선택한 걸 지우고 다시 그림

CRUD는 패턴이 있다
