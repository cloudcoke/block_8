// submit 버튼을 눌렀을때
// 아이디랑 패스워드가 비어있지 않을때
// 해당 정보를 가져와서
// list를 만든다
// 1. 어디에 엘리먼트를 추가할거냐
// 2. 어떤 엘리먼트로 추가할거냐
// 3. 추가 했던 엘리먼트의 내용을 어떻게 만들거냐
// 4. 만들었던 엘리먼트를 어떻게 추가할거냐
function submitHandler(e) {
  e.preventDefault();

  const uid = document.querySelector("#uid");
  const upw = document.querySelector("#upw");
  const error = document.querySelector("#error");
  console.log(uid);
  console.log("아이디는 : ", uid.value !== ""); // submit을 눌렀을 때 가지고 있던 값
  console.log("패스워드는 : ", upw.value !== "");

  if (uid.value !== "" && upw.value !== "") {
    // e.target.submit();
    const userList = document.querySelector("#userList");
    const li = document.createElement("li");
    li.innerHTML = uid.value + " " + upw.value;
    userList.append(li);

    uid.value = ""; // 값 제거
    upw.value = ""; // 값 제거
    error.style = "display:none";
  } else {
    alert("아이디나 패스워드를 입력해 주세요.");
    error.style = "display:block";
  }
  uid.focus(); // focus 설정
}

function init() {
  const form = document.querySelector("#loginForm");
  //   console.log(form);

  form.addEventListener("submit", submitHandler);
  // submit 이벤트는 form 엘리먼트에서만 이벤트 등록 가능
}

document.addEventListener("DOMContentLoaded", init);
