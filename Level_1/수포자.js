// https://school.programmers.co.kr/learn/courses/30/lessons/42840
//  내풀이
function solution(answers) {
  const result = [];

  // 정답 수
  const scores = [0, 0, 0];

  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 정답 시 scores 배열에 1 더하기.
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === p1[i % p1.length]) scores[0] += 1;
    if (answers[i] === p2[i % p2.length]) scores[1] += 1;
    if (answers[i] === p3[i % p3.length]) scores[2] += 1;
  }

  // 최고점 계산
  const maxScore = Math.max(...scores);

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) result.push(i + 1);
  }

  return result;
}

// 책 풀이
function solutionb(answers) {
  const result = [];

  const scores = [0, 0, 0];

  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }

  console.log(scores);

  const maxScore = Math.max(...scores);

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      result.push(i + 1);
    }
  }
  return result;
}
