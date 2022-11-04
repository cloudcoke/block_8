console.time("피보나치 - 재귀함수");
function fibo(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
}
fibo(46);
console.timeEnd("피보나치 - 재귀함수");
