// https://www.acmicpc.net/problem/2525
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [a, b] = input[0].split(" ").map(Number);
const c = Number(input[1]);

let res = a * 60 + b + c;
res %= 1440;

H = parseInt(res / 60);
M = res % 60;

console.log(H, M);
