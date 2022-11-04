# 날짜 - Date 객체 다루기

Javascript에 기본적으로 내장되어 있는 생성자 함수임

```js
new Date(); // 현재날짜 출력
// Fri Nov 04 2022 10:39:33 GMT+0900 (한국 표준시)
```

### 인자값이 1개 and `데이터타입` number일 경우

```js
//인자값(1/1000)초를 말함 milliseconds
new Date(0); // UTC 1970 01 01 00:00:00로 넣는다는 뜻
// Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)
```

GMT : 그리니치 평균시

```js
new Date(1000); // Thu Jan 01 1970 09:00:01 GMT+0900 (한국 표준시)
```

```js
// 하루 늘어남
new Date(24 * 3600 * 1000);
// Fri Jan 02 1970 09:00:00 GMT+0900 (한국 표준시)
```

특정 날짜를 기준으로 시간을 표현하는 방법
타임스탬프 timestamp

### 인자값이 1개 and `데이터타입` string일 경우

```js
new Date("2022-11-04");
// Fri Nov 04 2022 09:00:00 GMT+0900 (한국 표준시)
```

### 인자값이 n개 `데이터타입` number 일 경우

```js
// 년 월-1(0부터 시작) 일 시 분 초
new Date(2022, 11, 4);
// Sun Dec 04 2022 00:00:00 GMT+0900 (한국 표준시)

const dt = new Date(2022, 11, 4);

dt.getFullYear(); // 2022 년

dt.getMonth(); // 11 월

dt.getDate(); // 4 일

dt.getDay(); // 0 요일
```

```js
const dt = new Date("2022-11-04");

dt.getFullYear(); // 2022
dt.getMonth(); //        + 1 (0 ~ 11월)
dt.getDate();
dt.getDay();
// 일요일 ~ 토요일 0 ~ 6
```

# string.indexOf()

```js
const text = "javascript";

text.indexOf("java"); // 0
text.indexOf("script"); // 4
text.indexOf("a"); // 1 (제일 먼저 찾은 결과값)
text.indexOf("hello"); // -1 (없다라는 뜻)
```

텍스트가 있는가를 찾아줌
먼저 찾는걸 결과물로 줌
특정 스트링이 있는지 없는지 체크를 하는 용도로 사용
