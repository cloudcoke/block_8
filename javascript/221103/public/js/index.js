// function fibo(n) {
//   if (n == 1 || n == 2) return 1;

//   return fibo(n - 1) + fibo(n - 2);
// }
// 느림 fibo(100)
// console.log(fibo(100));
// 했던 연산을 또 하는 경우가 생김
// fibo(5) =>
// fibo(4) + fibo(3) =>
// fibo(3) + fibo(2) + fibo(2) + fibo(1) =>
// fibo(2) + fibo(1) + fibo(2) + fibo(2) + fibo(1)
// 굳이 콜스택에 쌓아 갈 이유가 없다
// 힙에 저장했다 필요시 사용
// 계산했던 결과물을 변수에 담아놓고 계산할 일이 생기면 사용한다
// =>
// 메모이제이션
let memo = {}; // memo 객체

function fibo(n) {
  let result;

  // in은 객체에서 사용
  if (n in memo) {
    result = memo[n];
  } else {
    if (n == 1 || n == 2) {
      result = 1;
    } else {
      result = fibo(n - 1) + fibo(n - 2);
    }
    memo[n] = result;
    // console.log(memo);
  }
  return result;
}
/*
 */

// 1 1 2 3 5 8 13 21 34 55
console.log(fibo(5));

// 대부분 return을 2번 사용
// 재귀함수는 조건문에 의해서 되고 안되고를 판별함

// 코드 작성
// 문제가 발생
// 왜 그런지 찾고 해결
// 최적화

// # 객체

// ## 메서드(method)
// 함수 = 메서드
// 함수
// function showMesage() {}
// const showMesage = function () {}
// const showMesage = () => {}
// 위와 같은 걸 함수라고 표현함

// 메서드
// 객체 안에 들어가 있는 함수
// 속성값에는 어떠한 값이라도 들어갈 수 있다
// 속성값에는 함수도 들어 갈 수 있다
// const user = {
//   name: "곽인구",
//   sum: function (a, b) {
//     return a + b;
//   },
// };

// 메서드 사용
// user.sum(1, 2);

// 객체안에 특수한 예약어가 존재
// ## this
// const user = {
//   name: "곽 인구",
//   firstName: "",
//   lastName: "",
//   age: 32,
//   sayHi: function () {
//     console.log(this.name + "님 안녕하세요.");
//     // console.log(user.name + "님 안녕하세요."); // 위랑 같음
//   },
//   // getter - 객체안에 있는 값을 가져오는 행위?
//   //   setFirstName: function () {
//   //     const arr = this.name.split(" ")[1];
//   //     // this.firstName = arr[1];
//   //     this.firstName = arr;
//   //   },
//   //   setLastName: function () {
//   //     const arr = this.name.split(" ")[0];
//   //     this.lastName = arr;
//   //   },
//   setName: function () {
//     const arr = this.name.split(" ");
//     this.lastName = arr[0];
//     this.firstName = arr[1];
//   },
//   // setter - 객체안에 있는 값을 변경하는 행위?
// };

// console.log(user);
// user.setFirstName();
// console.log(user);

// this는 . 앞에 있는 user 객체를 말한다
// this는 어디서 부터 실행이 되었는가가 중요함
// user.sayHi();

// 곽인구
// 첫글자 하나가 lastName
// 두번째 부터 끝까지가 firstName
// 글자를 자를 수 있어야 함

// 메서드를 많이 알아야 함
// let str = " 자바 스크립트 ";
// // String
// console.log(str.length); // str의 길이 (띄어쓰기도 글자수로 침) 9
// console.log(str);
// console.log(str.trim()); // 앞 뒤 공백 제거
// 찾아바꾸기
// 메서드 사용 시 각각 어떤 인자값이 들어가는 지 중요함
// string.replace(찾을단어, 바꿀값);
// console.log(str.replace("스크립트", "")); // 새로운 값으로 return 해줌
// let a = str.replace("스크립트", "");
// console.log(a.length); // 5
// a = a.trim();
// console.log(a.length); // 2

// replace 메서드 해석
// (method) String.replace
// (searchValue: string | RegExp, // string이나 정규표현식을 사용 할 수 있다
//     replaceValue: string) // string을 사용해라
// : string // return 값이 string이다

// 구분자를 통해서 글자를 나누고 싶을때 사용하는 메서드
// let x = "1.2.3.4.5.6.7.8.9"
// let y = [1,2,3,4,5,6,7,8,9]
// let x = "1.2.3.4.5.6.7.8.9";
// const y = x.split(".").map((x) => +x);
// console.log(y);

// (method) String.split(separator: string | RegExp,
//      limit? (?는 생략가능이라는 의미): number | undefined)
// : string[] => string을 배열안에 담아서 반환해 준다

// let nm = "곽 인구";
// let arr = nm.split(" ");
// console.log(nm);
// console.log(arr.length);
// console.log(arr[0]); // 곽
// console.log(arr[1]); // 인구

// # 정리
// 객체 안의 함수는 메서드다!
// 객체안의 함수를 실행 시킬 수 있다
// 객체안의 함수는 this라는 예약어가 있다
// this는 . 표기법 앞에 있는 객체를 가리킨다

// getter와 setter
// get, set이라는 키워드가 숨겨져 있음

// const user = {
//   name: "",
//   lastName: "",
//   firstName: "",
//   //   // setter
//   //   set name(value) {},
//   //   // getter
//   //   get name() {},
// };

// 객체는 비어있는 경우가 많음
// 있다면 꼭 필요한 정보만 들어 있음
// user.name = "곽인구";
// console.log(user); // {name: '곽인구', lastName: '', firstName: ''}

// name은 자바스크립트에서 많이 쓰는 속성명이라 사용하면 오류가 날 수 있음

// const user = {
//   name: "",
//   lastName: "",
//   firstName: "",
//   // setter
//   set _name(value) {
//     console.log(value);
//   },
//   // // getter
//   // get _name() {},
// };

// user._name = "곽인구";
// console.log(user);
// 곽인구
// {lastName: '', firstName: ''}

// const user = {
//   name: "",
//   lastName: "",
//   firstName: "",
//   // setter
//   set _name(value) {
//     const arr = value.split("");
//     this.name = value;
//     this.lastName = arr[0];
//     this.firstName = arr[1] + arr[2];
//   },
//   // getter
//   get _name() {
//     return this.firstName + " " + this.lastName;
//   },
// };

// user._name = "곽인구";
// console.log(user);
// // {name: '곽인구', lastName: '곽', firstName: '인구'}
// console.log(user._name); // 인구 곽
// setter를 활용하면
// name이라는 값에 넣기전에 한 번 조작이 가능함
// _name으로 값만 입력해주면 알아서 채워지게 됨
//  setter 객체안에 속성값을 채워 넣을때 사용하는 함수

// 대입연산자가 없으면 getter
// 대입연산자가 있으면 setter
// 가 호출된다

// getter
// 전화번호를 저장할때 사용함
// 010-1234-5678

// setter => 대입연산자 사용시 setter함수 출력
// getter => 대입연산자 없이 사용시 getter함수 출력
/*
getter 메서드는 obj.propName을 사용해 프로퍼티를 읽으려고 할 때 실행되고, 
setter 메서드는 obj.propName = value으로 프로퍼티에 값을 할당하려 할 때 실행됩니다.

https://ko.javascript.info/property-accessors
*/

// 생성자 함수
// 객체 틀을 만드는 함수

// 객체의 틀을 만드는 방법 1
// 객체리터럴 사용
// 가상 - 붕어빵 틀?
// function user(_name, _lastName, _firstName, _age) {
//   return {
//     name: _name,
//     lastName: _lastName,
//     firstName: _firstName,
//     age: _age,
//   };
// }

// // 실체 - 실제로 메모리에 적재가 된것
// const ingoo = user("곽인구", "곽", "인구", 32);
// // 이런 형태로 같은 객체를 여러가지 만들 수 있음
// const 준영 = user("장준영", "장", "준영", 28);
// // console.log(ingoo);
// const 배열 = [ingoo, 준영];
// console.log(배열);
// console.log(ingoo === 준영); // false
// // 다른 메모리 주소를 가지고 있다
// // 값을 변경해도 다른 객체에 영향을 주지 않는다

// 객체를 찍어낸는 함수
// 생성자 함수
// 생성자 함수 이름은 첫 글자를 대문자로 쓰는게 좋다
// function User(name, age) {
//   //   this = {}
//   this.name = name;
//   this.age = age;
//   //   return this
// }

// 인스턴스 생성했어? =>
// 너 붕어빵틀로 붕어빵 만들었어?
// 붕어빵틀 => 생성자 함수 붕어빵 => 생성자 함수를 사용해 만들어진 결과
// const 인구 = new User("곽인구", 32);
// const 준영 = new User("장준영", 28);
// console.log(인구);
// console.log(인구 === 준영); // false
// 준영.age -= 2;
// console.log(준영);
// console.log(인구);

// 만드는 이유
// 다른 메모리 주소를 가진 새로운 객체를 생성하기 위해서

// class 문법
// class는 객체를 만들어주기 위한 틀
// 객체를 찍어내는 틀
class User {
  //생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// 사용하기 위해서 객체를 만들어준다
// 메모리에 실제 데이터를 넣었다 인스턴스화 했다
const 인구 = new User("곽인구", 32);
const 준영 = new User("장준영", 28);

// 객체지향
// 객체로 돌아가는 코드를 만들겠다
