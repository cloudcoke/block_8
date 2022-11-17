# 게시판

1. 리스트로 게시물 보여주기 (read)
2. 게시물 클릭시 해당 게시물 보여주기 (read)
3. 게시물 작성하기 (create)
4. 게시물 수정하기 (update)
5. 게시물 삭제하기 (delete)

게시판은 read가 두가지

read는 두가지
데이터 전체 표현과 하나의 데이터 표현

## 작업

- 화면

리스트 페이지 - 2가지 이벤트가 있음
글 쓰기 페이지
글 수정 페이지
글 보기 페이지
글 삭제 페이지

- 이전까지는 html 페이지가 한 개였음 - SPA : Vue, React
  spa => youtube
  Single pPage Application

|--index.html - http://localhost:5500/221117/index.html
|--board
|----list.html - http://localhost:5500/221117/board/list.html
|----write.html - http://localhost:5500/221117/board/write.html
|----modify.html - http://localhost:5500/221117/board/modify.html
|----delete.html - http://localhost:5500/221117/board/delete.html

## 경일아카데미 기준

메인페이지 - http://www.kiweb.or.kr/index.html
인사말 - http://www.kiweb.or.kr/college/introduction.html
연혁 - http://www.kiweb.or.kr/college/history.html

수강후기 - http://www.kiweb.or.kr/community/review.html
수강후기(view) - http://www.kiweb.or.kr/community/review.html?mode=view&tname=postscript&idx=6872&page=1&keyfield=&keystring=
수강후기(write) - http://www.kiweb.or.kr/community/review.html?mode=write&tname=postscript

<!-- 화면을 만들고
링크 만들고
기능을 구현 -->

파일이 바뀌면 변수가 공유되는게 아니다
다른페이지로 이동시 데이터가 소멸됨
데이터 공유가 안된다

데이터 공유를 하는 방법이 없을까?

get, post

method : get
데이터 공유가 안되기 때문에 데이터를 넘긴다

### cookie

브라우저는 데이터를 저장함
글자를 저장 파일명

```js
// write.js
window.document.cookie = "name=ingoo";
```

<!-- 브라우저의 특정 디렉터리에 저장을 한다면
어떤 페이지에서도 접근이 가능하다? -->

### localStorage

쿠키랑 차이점 : 데이터 용량 차이와 다른 한가지(네트워크 영역)

JSON

```js
const person = {
  name: "ingoo",
  age: 32,
};

console.log(person); // {name: 'ingoo', age: 32}

// Object안에 있는 내용을 String으로 바꿔줌
const person2 = JSON.stringify(person);

console.log(person2); // {name: 'ingoo', age: 32}

// typeof
console.log(typeof person); // object
console.log(typeof person2); // string

const str = '{"name":"ingoo","age":32}';

console.log(person2 === str); // true

// String을 Object로
const person3 = JSON.parse(person2);
console.log(person3);
```

페이지가 바뀔때마다 데이터를 공유할 수 없으니 브라우저에게 맡김

브라우저를 껏다 켜도 유지가 됨

# List

Object => String
String => Object

웹 스토리지

- 로컬 스토리지 - 삭제하기 전까지는 삭제가 안됨
- 세션 스토리지 - 브라우저를 종료하면 삭제됨

쿠키 (최대 4kb)

- 데이터 저장하는 용량이 적음

저장한다는 메커니즘은 같음

로컬 스토리지 문법

```js
window.localStorage.setItem("name", "ingoo"); // 데이터 입력시 key, value 다 string임
window.localStorage.getItem("name"); // 가져오려면 key만
```

# write

스토리지 저장

번호
제목
내용
작성자
작성일
조회수

```js
{
    index:0,
    subject:'',
    content:'',
    writer:'',
    date:'',
    hit:''
}
```

location 객체를 이용하면 자바스크립트만으로 링크를 이동시킬 수 있음

window.location.href = '/board/view"

window 객체는 브라우저 전체

document 객체는 렌더 영역

location 객체는
url에 관련된 정보를 담는 객체

location.search => 쿼리스트링 내용을 반환?
? 다음에 있는걸

# view.js

```js
const item = window.localStorage.getItem("boards"); // string이 반환됨

console.log(item); // string => object

const board = JSON.parse(item);
console.log(board);

console.log(board.index);
console.log(board.subject);
console.log(board.content);
console.log(board.writer);
console.log(board.date);
console.log(board.hit);

const viewfrm = document.querySelectorAll("#viewFrm > div");

for (let i = 0; i < viewfrm.length; i++) {
  const id = viewfrm[i].id; // element id
  // board {subject: '곽인구'}
  // board.subject
  // board['subject']
  // const id = 'subject'
  // board[id] -> board['subject']
  console.log("id", id, board[id]);
}
```

# list

thead, tbody 시멘틱 태그
