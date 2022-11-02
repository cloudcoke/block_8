// 함수 선언
// 매개변수 - 함수 내부에서만 사용가능
// function showMessage(name, age) {
//   // code block
//   return undefined; // default
//   console.log("hello"); // 동작하지 않음
//   // return은 함수의 끝을 알림
// }
// 함수호출
// 인자
// showMessage("곽인구", 32);

// {} : scope
// function 키워드로 함수 선언 시 호이스팅이 일어남

// 콜스택

// function ingoo() {
//   console.log(3);`
//   return 4;
// }

// function goak() {
//   console.log(1);
//   return ingoo();
// }

// function hello() {
//   goak();
//   console.log(5);
//   ingoo();
//   return 10;
// }

// const result = hello();
// const answer = goak();
// console.log(result);

/*
1
3
5
3
result = 10
1
3
answer = 4
10
 */

// var로 함수를 선언 해도 호이스팅이 일어나지 않을까?
// showMessage();
// var showMessage = function () {
//   console.log("hello world!");
// };
// Uncaught TypeError: showMessage is not a function
// 호이스팅은 일어나지 않는다
// 함수 선언하지 않고 호출할 때 생기는 에러와 다른 에러가 나옴

// # 함수 선언식
// function showMessage() {}

// # 함수 표현식
// const showMessage = function () {};
// 장점
// 호이스팅이 일어나지 않음
// showMessage();
// const showMessage = function () {
//   console.log("hello world!");
// };
// Uncaught ReferenceError: Cannot access 'showMessage' before initialization
// 함수도 무언가의 값이다.
// 익명함수 - 일회용으로 사용할 함수는 함수명을 지정해 주지 않는다. 함수명이 없는 함수

// # 즉시함수 - 예전에 많이 사용 - 익명함수를 이용해 즉시함수를 만들었음
// (function () {
//   console.log("hello");
// })();
// 선언과 동시에 즉시 실행

// 이슈 : 즉시 함수를 사용할 때 자바스크립트가 어디가 끝인지 모르는 이슈가 발생했음
// 코드 작성시 세미콜론을 안 붙였을 때
// 즉시함수 앞에 세미콜론을 붙여준다.
// console.log('helloworld)
// ;(function () {
//     console.log("hello");
//   })();

// 함수도 값이다
// function showMessage() {
//   console.log("hello");
// }
// 함수를 호출하지 않고 함수이름만
// console.log 했을 때 나오는 값이
// console.log(showMessage); // ƒ showMessage() {}

// 새로운 변수를 만들고 거기에다 함수 이름을
// 넣었을 때 되나?
// const fn = showMessage;
// fn(); // hello 된다...

// 그러면 한번에 변수 선언하고 대입연산자
// 이후에 함수를 넣으면 되겠네?
// const showMessage2 = function () {
//   console.log("hello2");
// };
// showMessage2();
// 단점 가독성이 떨어짐
// 호이스팅은 왠만하면 만들지 않도록 한다
// 의도하지 않은 작동을 일으킬 수 있다.

// 그렇다면 응용
// 매개변수에도 함수를 넣을 수 있나? yes

// function hello(fn) {
//   console.log(fn);
// }

// function print() {
//   return 10;
// }

// hello(print); // => 함수 전체를 hello의 인자로 넣고 싶다
/*
ƒ print() {
  return 10;
}
 */
// hello(print()); // return 값을 인자로 넣는다 => 10
// print() 함수가 먼저 실행이 되기 때문이다.

// # callback 함수 !!!
// 함수도 값이다 !!!
// 무조건 알아야 함, 많이 사용함
// function hello(fn) {
//   // 매개변수로 print 함수를 받아서
//   console.log(fn()); // hello 함수 안에서 호출
// }

// function print() {
//   return 10;
// }
// hello(print); // 10

// 예시
// Event
// addEventListner('click', callback)

// 이런 형태를 `콜백함수` 라고 말하고
// 매개변수의 값은 함수 자체의 값이고
// `hello` 함수 호출시 **인자값** 으로 함수값을 전달합니다.
// `hello` 함수 내부에서 `print` 함수를 호출함
// 이 내용을 이해하려면 함수도 값이라는 사실을 꼮 알아야 함

// 콜백함수 안에서 인자값도 넣을 수 있다!
// `print` 함수에 매개변수를 설정하면
// `hello` 함수 내부에 선언된 변수를 활용하여 인자값을 넣을 수 있다.
// 함수 선언식
// function hello(fn) {
//   let ingoo = "javascript";
//   console.log(fn(ingoo));
// }

// function print(name) {
//   return 10 + name;
// }
// hello(print); // 10javascript

// 함수 표현식
// const hello = function (fn) {
//   let ingoo = "javascript";
//   console.log(fn(ingoo));
// };
// const print = function (name) {
//   return 10 + name;
// };

// hello(print); // 10javascript
// 함수 선언식과 함수 표현식의 차이점
// 함수표현식의 장점은 `호이스팅` 해결
// 함수표현식의 단점은 가독성 이슈
// 어떤걸 많이 사용하는가?
// 둘 다 많이 사용함

// function ingoo(callback) {
//   return callback;
// }

// function goak(callback) {
//   const fn = function () {
//     return 30;
//   };
//   const result = 1 + callback(fn);
//   return result;
// }

// function getNumber(callback) {
//   return 2 * callback();
// }

// console.log(goak(getNumber));

/*
1.
function goak(callback = function getNumber(callback) {
  return 2 * callback();
}) {
    const fn = function () {
    return 30;
  };
  const result = 1 + callback(fn);
  return result;
}

2.
function goak() {
    const fn = function( {
        return 30;
    })

    const result = 1 + getNumber(fn);
    return result;
}

3.
function goak() {
    const result = 1 + getNumber(fn);
    return result;
}

4.
function goak() {
    const result = 1 + (2 * fn());
    return result;

5. console.log(1 + (2*30)) => 61
}

*/

// 화살표 함수
// 함수 표현식을 조금더 간결한 문법으로 만드는 방법
// ES6에서 추가된 문법으로 `화살표 함수 (Arrow Function)`
// this라는 문제를 해결

// 화살표 함수 문법

// 함수 표현식
// const sum = function (a, b) {
//   return a + b;
// };

// function 키워드 생략
// const sum = (a, b) => {
//   return a + b;
// };

// return 생략
// const sum = (a+b) => a+b

// 매개변수가 1개일 경우 () 생략됨
// const sum = (a) => {
//   return a + 1;
// };

// const sum = (a) => a + 1;
// const sum = a => a + 1; // prettier-ignore

// 화살표 함수는 생략이 가능
// return 생략이 가능

// function을 => 로 바꾸고 return을 생략해서 옆에 붙인다?

// 만들었던 문제들을 arrow 함수로 만들어 보기

// function ingoo(callback) {
//   return callback;
// }

// function goak(callback) {
//   const fn = function () {
//     return 30;
//   };
//   const result = 1 + callback(fn);
//   return result;
// }

// function getNumber(callback) {
//   return 2 * callback();
// }

// const ingoo = (callback) => callback;
// const goak = (callback) => 1 + callback(() => 30);
// const getNumber = (callback) => 2 * callback();

// console.log(goak(getNumber));
// console.log(getNumber(() => 60));

// # 객체(Object)

// 객체는 자바스크립트를 잘 다루기 위해 꼭 알아야 할 `데이터`
// `데이터타입` 원시형 객체형으로 두 가지를 분리하여 설명한 적이 있음

// 원시형
// - 문자형
// - 숫자형
// - 불리언
// - undefined
// - null
// - ...

// 객체형 (참조형)
// - 배열
// - 객체
// - ...

// ## 객체 어떻게 생겼나

// 객체를 만드는 방법 (문법)
// 방법 1 : new 키워드를 사용해서 객체 생성 => 객체 생성자 문법
// const user = new Object();
// 방법 2 : '{}' 활용해서 객체를 생성하는 방법 => 객체 리터럴 문법
// const user1 = {};

// console.log(user); // {}
// console.log(user1); // {}

// 변수 하나에 여러가지 데이터를 담고 싶을때 사용하는게 `배열`이다.
// 리스트

// 변수 하나에 여러가지 데이터를 담고 싶을때 사용하는게 `객체`이다.
// 사물 상세정보
// 왜 쓰는가?
// 반 저체 학생리스트만 담고 싶을 때는 배열로 가능
// 학생리스트에 이름과 나이를 담을 때는 객체가 효과적

// 한 사람에 대한 정보를 담을 때는 객체
// 특정 리스트를 만들때는 배열

// 배열
// const students = ["곽인구", "강찬수", "김건영", "김성희", "김주형"];

// 배열
// 에어컨 리스트

// 객체
// 에어컨 상세정보

// 배열에 학생 리스트를 담는다면
// 총 학생 숫자도 구하기 쉬움
// 하나의 변수에 내용이 담겨 있으니 관리가 쉬움

// 그 학생 한명의 상세정보를 저장하기 위해서는
// 배열로는 한계가 느껴진다
// 학생 한명의 상세정보를 저장하기 위해서 사용하는 `데이터타입`이 바로 `객체`이다.

// 객체는 사람, 주문, 에어컨 등 실제 존재하는 개체를 표현할 때 적합함
// 속성 : 속성값
// const Person = {
//   name: "곽인구",
//   age: 32,
// };

// console.log(Person);

// `css`에서 많이 본 문법

// 변수 `Person` 객체 안에서
//`name`이라는 속성에는 `곽인구`라는 값을 입력함
// `age` 속성에는 `32` 값을 입력함

// 값이라는 공간이 중요함
// 값이면 `데이터타입` 어떤 것이든 들어올 수 있다
// string, number, boolean, function, array, object ...
// 값에는 어떠한 데이터타입을 넣어도 됨

// 객체 또한 변수 하나에 여러가지 값이 있다보니 특정 값만 뽑아올 수 있어야 함

// 객체 안에 있는 `name`을 console.log로 찍고 싶으면

// `점 표기법`
// console.log(Person.name);

// console.log를 보면
// console이라는 객체 안에 log: function () {}이 들어있다 볼 수 있음
// console은 객체이고 log는 함수인걸 알 수 있다

// 속성에 특수문자가 들어갈 경우
// 띄어쓰기, -, _, $ ...
// 속성에 _, 띄어쓰기는 많이씀
// 이럴 경우 양쪽끝에 '',"",``를 넣음
// 대부분 큰 따움표를 사용

// const user = {
//   name: "곽인구",
//   age: 32,
//   "Content-type": "text/javascript",
//   "Content type2": "text/javascript2",
// };

// 이 경우 점 표기법을 사용할 수 없음
// 이때 속성 값을 뽑고 싶다면
// `점 표기법`이 아닌 `[] 대괄호 표기법`을 사용한다

// console.log(user["Content-type"]);
// console.log(user["Content type2"]);

// 응용방법
// "Content-type" 내용을 담고있는 변수를 만든 다음 변수를 넣어주어도 됨
// let contentType = "Content-type";
// console.log(user[contentType]);

// 객체 안에 있는 `속성 이름`을 알아낸느 방법
// in 연산자

// console.log("name" in user); // boolean : true
// console.log("subName" in user); // false

// for in 문
// 객체내용을 반복문을 통해 안에 있는 정보를 다 보고 싶을때
// 객체안의 key 값 반환
// for (let key in 객체) {

// }

// for (let key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// 속성 추가
// user.height = 180;
// console.log(user);

// 속성 변경
// user.height = 170;
// console.log(user);

//
// 객체 자체를 바꾸는 것은 불가능
// user = 10; // error 발생

// console.log({} === {}); // 메모리 주소가 다르기 때문에 같지 않음

// const obj = {
//   name: "곽인구",
//   age: 32,
//   sizes: {
//     height: 180,
//     weight: 80,
//   },
// };

// const clone = obj;
// console.log(clone === obj); // 메모리 주소가 같기 때문에 같음

// 배열도 같은 원리이다

// 원시 데이터는 하나의 값에 하나의 메모리 주소가 들어감

// 다른 메모리 주소로 다른 객체 복사하기
// 객체를 복사하고 싶은데 참조 형태로 복사하고 싶지는 않을때
// const clone = {};

// for (let key in obj) {
//   clone[key] = obj[key];
// }

// console.log(clone);
// console.log(clone === obj); // false

// es6에서 생긴 문법
// 다른 메모리 주소로 다른 객체 복사하기
// ### spread operator(스프레드 연산자) 전개 연산자
// ...
// ...은 객체 리터럴을 빼고 안에 있는 값만 가져오겠다는 의미
// const a = { obj }; // 객체 자체가 들어감

// const clone = { ...obj }; // 내용만 복사

// console.log(a);
// console.log(clone);
// console.log("clone === obj");
// console.log(clone === obj); // false

// console.log(obj.sizes === clone.sizes); // true

// 객체 안에 참조형 데이터가 있을 경우에는 다음과 같이 해 줘야 함
// const inner_clone = { ...obj, sizes: { ...obj.sizes } };

// console.log(obj.sizes === inner_clone.sizes); // false

// console.log("obj === inner_clone");
// console.log(obj === inner_clone);
// clone.sizes.height = 190;
// console.log(obj.sizes.height); // 190
// console.log(clone.sizes.height); // 190
// console.log(inner_clone.sizes.height); // 180

// 피보나치 수열
// 메모이제이션
// let memo = {};

// function fibo(n) {
//   let result;

//   if (n in memo) {
//     result = memo[n];
//   } else {
//     if (n == 1 || n == 2) {
//       result = 1;
//     } else {
//       result = fibo(n - 1) + fibo(n - 2);
//     }
//     memo[n] = result;
//   }
//   return result;
// }

// console.log(fibo(10));
