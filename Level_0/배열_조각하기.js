// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/181893

// 내 풀이
function solution(arr, q) {
  q.forEach((item, idx) => {
    if (idx % 2 === 0) {
      arr = arr.slice(0, item + 1);
    } else {
      arr = arr.slice(item);
    }
  });

  return arr;
}

//다른 사람 풀이

function solutionB(arr, query) {
  query.map((v, i) => (i % 2 ? arr.splice(0, v) : arr.splice(v + 1)));
  return arr;
}
