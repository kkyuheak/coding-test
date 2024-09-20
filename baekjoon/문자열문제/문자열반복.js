// https://www.acmicpc.net/problem/2675
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  const r = Number(input[i].split(" ")[0]);
  const s = input[i].split(" ")[1].split("");
  let res = "";
  for (let j = 0; j < s.length; j++) {
    const str = s[j].repeat(r);
    res += str;
  }
  console.log(res);
}
