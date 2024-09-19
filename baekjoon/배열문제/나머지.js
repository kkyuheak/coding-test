// https://www.acmicpc.net/problem/3052
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const arr = input.map(Number);
let arrSet = new Set();

for (let i = 0; i < 10; i++) {
  arrSet.add(arr[i] % 42);
}
console.log(arrSet.size);
