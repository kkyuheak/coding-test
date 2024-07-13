// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/12935

// 내풀이
function solution(arr) {
  let answer = [];

  let lastIndex = arr
    .slice()
    .sort((a, b) => b - a)
    .pop();

  answer = arr.filter((num) => num !== lastIndex);

  if (!answer.length) {
    answer.push(-1);
  }

  return answer;
}

// 다른 사람 풀이

function solutionB(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}
