// https://www.acmicpc.net/problem/2588
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const a = input[0];
const b = input[1];

x = b[2]; //일의 자리
y = b[1]; //십의 자리
z = b[0]; //백의 자리

console.log(Number(a) * x);
console.log(Number(a) * y);
console.log(Number(a) * z);
console.log(Number(a) * Number(b));

// 간단하게 생각하기, 너무 복잡하게 생각하지말기..
