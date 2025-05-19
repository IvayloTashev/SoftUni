function isNonEmptyStringArray(arr: unknown): arr is string[] {
    return Array.isArray(arr) && arr.length >= 1 && arr.every(el => typeof el === "string");

}

let arr: unknown = ['123', '123'];
if (isNonEmptyStringArray(arr)) {
    console.log(arr.length);    // allowed
}



