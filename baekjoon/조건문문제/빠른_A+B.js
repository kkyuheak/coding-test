//https://www.acmicpc.net/problem/15552

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);
let result = "";

for (let i = 1; i <= num; i++) {
  const data = input[i].split(" ");
  const a = Number(data[0]);
  const b = Number(data[1]);
  result += a + b + "\n";
}

console.log(result);
