// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/17681

// 내 풀이
function solution(n, arr1, arr2) {
  let answer = [];
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] | arr2[i]);
  }
  const finalArr = result.map((num) => {
    const str = num.toString(2);
    return str.padStart(n, "0");
  });

  answer = finalArr.map((item) => {
    return item.replaceAll("1", "#").replaceAll("0", " ");
  });
  return answer;
}

//  다른 사람 풀이
function solutionB(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );
}

const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};
