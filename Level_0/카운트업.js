// 내 풀이
function solution(start_num, end_num) {
  let answer = [];
  for (let i = start_num; i <= end_num; i++) {
    answer.push(i);
  }
  return answer;
}

// 다른사람 풀이
function solutionB(start, end) {
  idx = start;
  return Array.from({ length: end - start + 1 }, () => {
    return start++;
  });
}
