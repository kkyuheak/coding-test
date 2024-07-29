// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/12982

// 내 풀이
function solution(d, budget) {
  let answer = 0;
  let total = 0;

  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    total += d[i];
    if (total > budget) {
      break;
    }
    answer++;
  }

  return answer;
}

// 다른 사람 풀이
function solutionB(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}
