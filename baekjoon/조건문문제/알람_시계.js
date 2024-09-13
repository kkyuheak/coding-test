//https://www.acmicpc.net/problem/2884

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = input[0].split(" ");

let H = Number(num[0]);
let M = Number(num[1]);

if (M < 45) {
  H -= 1;
  M += 15;
  if (H < 0) H = 23;
} else {
  M -= 45;
}
console.log(H, M);
