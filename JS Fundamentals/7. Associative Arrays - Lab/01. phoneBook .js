function phoneBook (input) {

    let phoneBookArr = {};

    for (let tokens of input) {
        let [name, phoneNumber] = tokens.split(` `);

        phoneBookArr[name] = phoneNumber;
    }

    for (let [key, value] of Object.entries(phoneBookArr)) {
        console.log(key, `->`, value);
    }

}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])