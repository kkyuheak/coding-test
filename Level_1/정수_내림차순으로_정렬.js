// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/12933

// 내 풀이
function solution(n) {
  return +n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

// 다른 사람 풀이
function solutionB(n) {
  const newN = n + "";
  const newArr = newN.split("").sort().reverse().join("");

  return +newArr;
}
