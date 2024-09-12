function addAndRemove(arr) {

    newArr = [];
    let element = 1;

    for (let command of arr) {

        if (command == "add") {
            newArr.push(element);
            element++;

        } else {
            newArr.pop()
            element++;
        }
    }

    if (newArr.length == 0) {
        console.log(`Empty`);
        
    } else {
        console.log(newArr.join(` `));
    }

}

addAndRemove(['add', 'add', 'remove', 'add', 'add'])