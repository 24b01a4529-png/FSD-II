let str: string = "hello";

for (let i = 0; i < str.length; i++) {

    let count = 0;

    for (let j = 0; j < str.length; j++) {

        if (str[i] == str[j]) {
            count++;
        }
    }

    let printed = false;

    for (let k = 0; k < i; k++) {
        if (str[i] == str[k]) {
            printed = true;
            break;
        }
    }

    if (!printed) {
        console.log(str[i] + " = " + count);
    }
}