function addAndRemoveElements(arr) {

    let num = 1;
    result = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == "add") {
            result.push(num);
            num++;
        } else {
            result.pop();
            num++;
        }

    }

    if (result.length == 0) {
        console.log("Empty");
    } else {
        console.log(result.join("\n"));
    }

}

addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
)