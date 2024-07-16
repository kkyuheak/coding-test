// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/76501

// 내 풀이
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  return answer;
}

// 다른 사람 풀이
function solutionB(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
