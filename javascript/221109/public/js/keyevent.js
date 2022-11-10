const pw = document.querySelector("#pw");
const repw = document.querySelector("#repw");
const error = document.querySelector("#pwError");
console.log(pw);
function changeHandler(e) {
  if (pw.value === "") {
    error.style = "color:red;";
    error.innerHTML = "비밀번호를 먼저 입력해주세요";
    pw.focus();
    e.target.value = "";
    return;
  }
  if (e.target.value === pw.value) {
    error.style = "color:green;";
    error.innerHTML = "패스워드가 일치합니다.";
  } else {
    error.style = "color:red;";
    error.innerHTML = "패스워드가 일치하지 않습니다.";
  }
}

// keyup : 누르고 땠을때 실행
// keydown : 키보들를 누를때 실행, 누르고 있을 때마다 실행
// keypress : 누르고 있을때도 이벤트 발동, 한글 인식 안됨, 방향키에 많이 사용

repw.addEventListener("keyup", changeHandler);
