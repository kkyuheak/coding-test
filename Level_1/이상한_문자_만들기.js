// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/12930

// 내 풀이
function solution(s) {
  const sArr = s.split(" ");

  return sArr
    .map((char) => {
      return char
        .split("")
        .map((item, idx) => {
          if (idx % 2 === 0) {
            return item.toUpperCase();
          } else {
            return item.toLowerCase();
          }
        })
        .join("");
    })
    .join(" ");
}

// 다른 사람 풀이
function toWeirdCase(s) {
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}
