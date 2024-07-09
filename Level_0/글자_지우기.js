// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/181900

// 내 풀이
function solution(my_string, indices) {
  let answer = "";
  let arr = my_string.split("");
  indices.forEach((num) => {
    arr[num] = "";
  });
  answer = arr.join("");

  return answer;
}

// 다른 사람 풀이
function solutionB(m, a) {
  var answer = "";

  for (let i = 0; i < m.length; i++) {
    if (!a.includes(i)) {
      answer += m[i];
    }
  }

  return answer;
}
