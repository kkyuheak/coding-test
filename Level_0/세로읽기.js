// https://school.programmers.co.kr/learn/courses/30/lessons/181904?language=javascript
function solution(my_string, m, c) {
  let answer = "";

  let sArr = [];
  const arr = my_string.split("");

  for (let i = 0; i < my_string.length; i += m) {
    let res = arr.slice(i, i + m);
    sArr.push(res);
  }
  console.log(sArr);

  sArr.forEach((item) => (answer += item[c - 1]));

  return answer;
}

//  다른 사람 풀이

function solutionB(my_string, m, c) {
  return [...my_string].filter((_, i) => i % m === c - 1).join("");
}
