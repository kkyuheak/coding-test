// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/68935

// 내 풀이
function solution(n) {
  const number = n.toString(3).split("").reverse().join("");
  return parseInt(number, 3);
}

// 다른 사람 풀이
const solutionB = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};
