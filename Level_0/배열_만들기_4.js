// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/181918

// 내 풀이
function solution(arr) {
  let stk = [];
  let i = 0;
  while (i < arr.length) {
    if (!stk.length) {
      stk.push(arr[i]);
      i++;
    } else if (stk.length && stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
    } else if (stk.length && stk[stk.length - 1] >= arr[i]) {
      stk.pop();
    }
  }

  return stk;
}

// 다른 사람 풀이
function solutionB(arr) {
  var stk = [];
  for (let i = 0; i < arr.length; ) {
    if (stk.length === 0) {
      stk.push(arr[i++]);
    } else if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i++]);
    } else if (stk[stk.length - 1] >= arr[i]) {
      stk.pop();
    }
  }
  return stk;
}
