// console.log("hello wolrd1");
// console.log("hello world2");
// console.log("hello wolrd3");
// console.log("hello world4");
// console.log("hello world5");

// 연산자
// + - / * =
// 연산자 사용시 앞 뒤로 값이 들어가야 함
// X + Y
// console.log(1 + 1); // 2
// console.log(1 - 1); // 0
// console.log(4 / 2); // 2
// console.log(7 % 2); // 1
// console.log(2 * 3); // 6

// = 대입 연산자

/* 
예약어
var
let
const
*/

// 변수
// 변수선언예약어 변수명 대입연산자 값
// num이라는 변수에 1이라는 값을 집어 넣겠다는 의미
// var num = 1;

// console.log(변수명); => 변수 값 출력
// console.log(num);

// let num1 = 2;
// console.log(num1);

// const data = 3;
// console.log(data);

// 변수 선언할 시 (대입연산자를 사용하지 안았을때) 메모리에 공간을 생성해
// num이라는 주소를 부여함
// 이후 대입 연산자를 사용해 num에 1을 넣으면
// num의 값이 1이 됨
//  var num
// num =1
// console.log(num)
//

// var는 2015년 전에 사용(es6 전)
// let과 const는 요즘에 사용

// var는 호이스팅이라는 개념이 있음

// console.log(hoi);
// var hoi;
// hoi = 1;
// 결과 undefined

// 우선순위라는 개념이 있음
// 자바스크립트가 위에서 아래로 읽지만 실행전에 한번 전체적으로 코드 검사를 함
// 코드 검사가 끝나면 코드를 실행
// 코드 검사시 var를 만나면 무조건 최상단 위로 올림
// 그래서 메모리 주소에 변수 이름이 부여됨 그다음
// console.log(hoi)가 실행되면 값이 들어가 있지 않기 때문에 undefined가 출력됨

// let과 const의 차이점

// 변수
// 재할당 가능 (값 변경이 가능)
// 재선언은 불가능
// let 번호;
// 번호 = 1;
// console.log(번호);

// 재할당
// 번호 = 10;
// console.log(번호);

// 재선언 => 같은 주소를 가질 수 없기 때문에 불가능
// let 번호

// 상수
// 선언과 동시에 값을 할당 (대입연산자까지 같이 써줘야 함)
// 메모리 공간에 주소를 생성 후 값을 넣어 줘야 함
// 재할당 불가능
// 재선언 불가능
// const num
// num = 1

// console.log(num)

// 재할당 불가능
// const num = 1;
// console.log(num);
// const num = 2;

// 재선언 불가능
// const num = 1;
// const num = 2;

// 변수 선언 방법
// 예약어 [let, const] 변수명 [아무글자] = [데이터]
// 변수이름 규칙
/* 
특수문자 불가능
첫글자는 숫자이면 안됨
예약어는 안됨
 */

// let a // 선언
// a = 10 // 할당
// console.log(a) //출력

// 대입연산자 기준으로 오른쪽에 들어가는 값 (!중요!)
// 값들에는 타입이 다름

// 문자형 ( `` , '' , "") 로 감싸진 값
// 따옴표로 감싸진 순간 숫자처럼 보여도 문자임
// let string = "1";
// console.log(string);

// 정수형
// let string2 = 1;
// console.log(string2);

// 선언 변수명 대입연산자 값(데이터타입)

// +
// let string = "block";
// let string2 = "chain";

// 문자형끼리는 연결
// console.log(string + string2);

// let num = 1;
// let num2 = 2;

// 정수형 끼리는 연산을 한 결과
// console.log(num + num2);

// 문자형과 정수형 연산은 문자형 결과 (문자형이 쎄기 때문에)
// console.log(string + num);
// console.log(num2 + string2);
// 자주하는 실수
// strNum의 데이터 타입이 string이기 때문에 붙여서 나옴
// String
// let strNum = "191";
// Number
// let num3 = 3;

// console.log(strNum + num3);

// string에는 - 연산자가 없다
// 그래서 - 연산을 하면 string을 number로 바꿔서 계산해 줌
// console.log(strNum - num3);
// string에 * 연산자도 없다
// console.log(strNum * 3);

// 변수 선언 규칙
// 두 단어가 합쳐진 단어일 때 카멜표기법 사용
// 두번째 단어에 대문자를 사용
// var firstName // 카멜표기법
// var FirstName // 파스칼 표기법
// var first_name // 스네이크
var num = 1;
var num = 2;
console.log(num);
