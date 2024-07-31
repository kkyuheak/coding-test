// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/70129

// 내 풀이
function solution(s) {
  let remove = 0;
  let translate = 0;

  while (s !== "1") {
    translate++;
    let len = s.replaceAll("0", "").length;

    let minus = s.length - len;
    remove += minus;
    s = len.toString(2);
  }

  return [translate, remove];
}

// 다른 사람 풀이
function solutionB(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}
