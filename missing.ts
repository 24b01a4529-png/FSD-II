let arr: number[] = [1, 2, 3, 5];

let n = 5;

let total = (n * (n + 1)) / 2;

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

console.log("Missing Number =", total - sum);