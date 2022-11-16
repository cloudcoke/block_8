// function checkName(value) {
//   if (value !== "cloudcoke") {
//     throw new Error("나 에러났음");
//   }
//   return true;
// }

// try {
//   // 코드를 실행할 영역
//   let name = "cloudcoke";
//   checkName(name);
//   // 아래에 중요한 로직
//   console.log("나 실행됨");
// } catch (e) {
//   // 에러가 날 경우 실행
//   console.log(e);
// }
function isIronMan(name) {
  if (name !== "IronMan") {
    throw new Error("He is not a Iron Man");
  }
  return true;
}

try {
  let name = "Vision";
  isIronMan();
  console.log("He is Iron Man");
} catch (error) {
  console.log(error);
}
