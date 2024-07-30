// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/12915

// 내풀이
function solution(strings, n) {
  let answer = [];

  const arr = strings.sort();
  return arr.sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
}

// 다른 사람 풀이
function solutionB(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
