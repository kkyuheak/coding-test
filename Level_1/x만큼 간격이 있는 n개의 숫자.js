// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/12954

// 내풀이
function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

// 다른 사람 풀이
function solutionB(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
