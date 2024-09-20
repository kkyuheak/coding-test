// https://www.acmicpc.net/problem/1316
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
let result = 0;

function check(data) {
  let set = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] !== data[i + 1]) {
      if (set.has(data[i + 1])) {
        return false;
      } else {
        set.add(data[i + 1]);
      }
    }
  }
  return true;
}

for (let i = 1; i <= n; i++) {
  if (check(input[i])) result++;
}

console.log(result);
