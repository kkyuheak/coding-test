// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/181897

// 내 풀이
function solution(n, slicer, num_list) {
  let answer = [];
  const [a, b, c] = slicer;

  if (n === 1) {
    answer = num_list.slice(0, b + 1);
  } else if (n === 2) {
    answer = num_list.slice(a);
  } else if (n === 3) {
    answer = num_list.slice(a, b + 1);
  } else if (n === 4) {
    for (let i = a; i <= b; i += c) {
      answer.push(num_list[i]);
    }
  }
  return answer;
}

// 다른사람 풀이
function solutionB(n, slicer, num_list) {
  let [a, b, c] = [...slicer];

  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
  }
}
