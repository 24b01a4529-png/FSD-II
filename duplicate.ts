let str: string = "programming";

let result = "";

for (let i = 0; i < str.length; i++) {

    if (!result.includes(str[i])) {
        result = result + str[i];
    }
}

console.log(result);