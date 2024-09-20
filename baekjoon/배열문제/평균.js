// https://www.acmicpc.net/problem/1546
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const arrL = Number(input[0]);
const scoreArr = input[1].split(" ").map(Number);

const maxScore = Math.max(...scoreArr);
const resultArr = scoreArr.map((n) => (n / maxScore) * 100);

const newSum = resultArr.reduce((acc, cur) => acc + cur, 0);

console.log(newSum / arrL);
