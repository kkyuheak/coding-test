// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/12943

// 내 풀이
function solution(num) {
  let answer = 0;

  while (num !== 1) {
    if (answer === 500) return -1;

    if (num === 1) return 0;

    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    answer++;
  }

  return answer;
}

// 다른 사람 풀이
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
