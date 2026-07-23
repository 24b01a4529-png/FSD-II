let arr: number[] = [1, 2, 2, 3, 1, 4, 2];
for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++;
        }
    }
    let printed = false;
    for (let k = 0; k < i; k++) {
        if (arr[i] == arr[k]) {
            printed = true;
            break;
        }
    }
    if (!printed) {
        console.log(arr[i] + " = " + count);
    }
}