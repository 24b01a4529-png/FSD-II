function display<T>(value: T): T {
    return value;
}

console.log(display<number>(100));
console.log(display<string>("Hansika"));

function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

console.log(getLength("TypeScript"));
console.log(getLength([1, 2, 3, 4, 5]));