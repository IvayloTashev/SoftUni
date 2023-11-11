function oddOccurrences(input) {

    let storage = {};
    let elements = input.split(` `)

    for (let element of elements) {
        elementsToLowerCase = element.toLowerCase();

        if (elementsToLowerCase in storage) {
            storage[elementsToLowerCase] += 1;
        } else {
            storage[elementsToLowerCase] = 1;
        }
    }

    let result = [];
    let entries = Object.entries(storage).sort((a, b) => b[1] - a[1]);

    for (let [element, num] of entries) {
        let repeats = Number(num);

        if (repeats % 2 != 0) {
            result.push(element)
        }
    }

    console.log(result.join(` `));

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')