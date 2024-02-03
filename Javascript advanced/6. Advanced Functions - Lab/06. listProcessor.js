function listProcessor(arr) {

    let colection = [];

    let operations = {
        add(str) {
            return colection.push(str);
        },

        remove(str) {
            return colection = colection.filter(element => element != str);
        },

        print(arr) {
            return console.log(colection.join(`,`))
        }

    }

    for (let element of arr) {
        let [command, value] = element.split(` `);
        
        if (command == "add") {
            operations.add(value);

        } else if (command == "remove") {
            operations.remove(value);

        } else if (command == "print") {
            operations.print(colection);
        }
    }

}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])