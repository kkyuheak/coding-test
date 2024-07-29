// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/12926

// 내 풀이
function solution(s, n) {
  var answer = "";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";

  return s
    .split("")
    .map((char) => {
      if (char === " ") return " ";

      if (upper.includes(char)) {
        return upper[(upper.indexOf(char) + n) % 26];
      }

      if (lower.includes(char)) {
        return lower[(lower.indexOf(char) + n) % 26];
      }
    })
    .join("");
}
