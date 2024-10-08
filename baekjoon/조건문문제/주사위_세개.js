// https://www.acmicpc.net/problem/2480

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const [a, b, c] = input.split(" ").map(Number);

if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b) {
  console.log(1000 + a * 100);
} else if (a === c) {
  console.log(1000 + a * 100);
} else if (b === c) {
  console.log(1000 + b * 100);
} else {
  console.log(Math.max(a, b, c) * 100);
}
