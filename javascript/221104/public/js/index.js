// 링크 1

// 프로타입의 상속의 개념
// function 비둘기() {
//   this.날개갯수 = 2;
//   this.날수있나 = true;
// }

// const 닭둘기 = new 비둘기();

// function 참새() {
//   this.크기 = "작다";
// }

// 참새.prototype = 닭둘기;

// const 귀여운참새 = new 참새();
// console.log(귀여운참새);
// var name = "ingoo";

// init();
// function init() {
//   var name = "곽인구";
//   function displayName() {
//     console.log(name);
//     var name = "web7722";
//   }
//   displayName();
// }
// 결과
// undefined;

// 호이스팅이 일어나는 키워드
// var function
// 실행될때 결정되는 것이 많음
// 면접때 물어볼 듯
// 호이스팅 질문이 나오면
// 실행 컨텍스트 생성시 렉시컬 스코프
// 내에 선언이 끌어올려 지는 게 호이스팅

// 실행 => 실행컨텍스트
// 렉시컬 스코프 => 코드블럭
//

// URL
// https://cloudcoke.tistory.com/
// cloudcoke.tistory.com
// https://velog.io/@yeseolee/

// 생성자 함수 ver
// function Blog(url) {
//   this.blog = setBlog(url);
//   this.type = setType(url);

//   function setBlog(url) {
//     if (url.indexOf("http") === -1) {
//       return "https://" + url;
//     }
//     return url;

//     // return (url.indexof("http") === -1) ? "https://" + url : url
//   }

//   function setType(url) {
//     // hint 배열 반복문
//     if (url.indexOf("tistory.") >= 0) {
//       return "tistory";
//     }

//     if (url.indexOf("velog.") >= 0) {
//       return "velog";
//     }
//     return null;
//   }
// }

// const a = new Blog("https://cloudcoke.tistory.com/");
// const b = new Blog("cloudcoke.tistory.com");
// const c = new Blog("https://velog.io/@yeseolee/");

// console.log(a);
// console.log(b);
// console.log(c);

// class ver
// class Blog {
//   //ES7 에서 나온 문법 필드 선언
//   // 클래스가 가질 속성들을 적어준다
//   blog;
//   type;
//   name;
//   //

//   constructor(url) {
//     this.setBlog = url;
//     this.setType = url;
//   }
//   set setBlog(value) {
//     let result = value;
//     if (value.indexOf("http") === -1) {
//       result = "https://" + value;
//     }
//     this.blog = result;
//     // this.blog = value.indexOf("http") === -1 ? "https://" + value : value;
//   }

//   set setType(value) {
//     if (value.indexOf("tistory.") !== -1) {
//       this.type = "tistory";
//     }
//     if (value.indexOf("velog.") !== -1) {
//       this.type = "velog";
//     }
//     // this.type = value;
//   }
// }
// const a = new Blog("https://cloudcoke.tistory.com/");
// const b = new Blog("cloudcoke.tistory.com");
// const c = new Blog("https://velog.io/@yeseolee/");
// console.log(a);
// console.log(b);
// console.log(c);

// 대입연산자를 이용해 setBlog라는 걸 사용했을때 동작하기 때문에
// this.setBlog = url 사용
