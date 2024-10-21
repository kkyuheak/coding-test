// https://school.programmers.co.kr/learn/courses/30/lessons/68644
function solution(numbers) {
  let arr = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }
  const result = [...new Set(arr)].sort((a, b) => a - b);

  return result;
}

// 다른 사람풀이
function solutionB(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}
