function operator(param: string | number | string[], operation: 'Index' | 'Length' | 'Add', operand: number): string | number {

    if (operation === 'Index' && (typeof param === 'string' || Array.isArray(param) && param.every(el => typeof el === "string"))) {
        return param[operand]
    }

    if (operation === "Length" && (typeof param === "string" || Array.isArray(param) && param.every(el => typeof el === "string"))) {
        return param.length % operand
    }

    if (operation === "Add" && (typeof param === "string" || typeof param === "number")) {
        if (typeof param === "string") {
            param = Number(param);
        }
        return operand += param
    }

    throw new Error('Invalid parameters');

}

console.log(operator(['First', 'Second', 'Third'], 'Index', 1));
console.log(operator('string', 'Index', 1));
console.log(operator(['Just', 'Two'], 'Length', 5));
console.log(operator('short string1', 'Length', 5));
console.log(operator('7', 'Add', 3));
console.log(operator(11, 'Add', 3));







