// https://www.acmicpc.net/problem/4344
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  const arr = input[i].split(" ").map(Number);
  const firstNum = arr[0];

  let sum = 0;
  let avg = 0;

  for (let j = 1; j <= firstNum; j++) {
    sum += arr[j];
  }
  avg = sum / firstNum;

  let res = 0;
  for (let t = 1; t <= firstNum; t++) {
    if (arr[t] > avg) res++;
  }

  console.log(`${((res / firstNum) * 100).toFixed(3)}%`);
}
