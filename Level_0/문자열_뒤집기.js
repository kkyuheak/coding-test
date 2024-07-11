// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/181905

// 내 풀이
function solution(my_string, s, e) {
  const a = my_string
    .split("")
    .slice(s, e + 1)
    .join("");
  const b = my_string
    .split("")
    .slice(s, e + 1)
    .reverse()
    .join("");

  return my_string.replace(a, b);
}

// 다른 사람 풀이
function solutionB(my_string, s, e) {
  var answer = "";
  var str = my_string.substring(s, e + 1);
  var newStr = str.split("").reverse().join("");

  answer = my_string.replace(str, newStr);
  return answer;
}
