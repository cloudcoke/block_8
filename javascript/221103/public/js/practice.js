console.time("피보나치 - 메모이제이션");
let memo = {};

function fibo(n) {
  let result;

  if (n in memo) {
    result = memo[n];
  } else {
    if (n == 1 || n == 2) {
      result = 1;
    } else {
      result = fibo(n - 1) + fibo(n - 2);
    }
    memo[n] = result;
  }
  return result;
}

fibo(6);
console.timeEnd("피보나치 - 메모이제이션");
