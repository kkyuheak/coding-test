// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/155652

// 내 풀이
function solution(s, skip, index) {
  let answer = [];
  let alphabetArray = [...Array(26)].map((_, i) => String.fromCharCode(97 + i));
  const sArr = s.split("");

  //skip 제거
  const filterArr = alphabetArray.filter(
    (char) => !skip.split("").includes(char)
  );

  // a + index
  sArr.forEach((item) => {
    const idx = filterArr.indexOf(item);
    answer.push(filterArr[(idx + index) % filterArr.length]);
  });
  return answer.join("");
}

// 다른 사람 풀이
function solutionB(s, skip, index) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ].filter((c) => !skip.includes(c));
  return s
    .split("")
    .map((c) => alphabet[(alphabet.indexOf(c) + index) % alphabet.length])
    .join("");
}
