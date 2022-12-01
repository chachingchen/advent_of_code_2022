const fs = require("fs");

const elves = fs.readFileSync("input.txt", "utf8");

let elfCalories = elves.split(/\r?\n\r?\n/)
    .map((elf) =>
        elf.split(/\r?\n/).map((x) => parseInt(x)).reduce((prev, curr) => prev + curr, 0)
    ).sort((a, b) => a - b);

console.log("Most calories by elf: ",elfCalories[elfCalories.length-1]);
console.log("sum(top 3 elves calories): " , (elfCalories.slice(-3).reduce((prev, curr) => prev + curr, 0)));