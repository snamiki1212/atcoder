import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");

// --------------------------------
// Parse
// --------------------------------
const [_N, ...rest] = input;
const N = parseInt(_N);
const lines = rest.map((_line) => {
  return _line.split(" ").map((_) => parseInt(_));
});

// --------------------------------
// Start logic....
// --------------------------------
console.log("hello", N, lines);
