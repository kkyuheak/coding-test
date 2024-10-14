// https://school.programmers.co.kr/learn/courses/30/lessons/181912
function solution(intStrs, k, s, l) {
  let answer = [];
  let arr = [];
  intStrs.forEach((item) => {
    arr.push(item.slice(s, l + s));
  });

  arr.forEach((num) => {
    if (Number(num) > k) {
      answer.push(Number(num));
    }
  });

  return answer;
}
// 다른 사람 풀이
function solutionB(intStrs, k, s, l) {
  return intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
}
