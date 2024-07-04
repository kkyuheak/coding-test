// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/181917

// 내 풀이
function solution(x1, x2, x3, x4) {
  let answer = true;
  answer = (x1 || x2) && (x3 || x4);

  return answer;
}

// 다른 사람 풀이

function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}
