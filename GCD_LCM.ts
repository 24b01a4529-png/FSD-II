let a: number = 12;
let b: number = 18;

let num1 = a;
let num2 = b;

while (num2 != 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
}

let gcd = num1;
let lcm = (a * b) / gcd;

console.log("GCD =", gcd);
console.log("LCM =", lcm);