function addressBook(input) {

    let addressBookArr = {};

    for (let tokens of input) {
        let [name, address] = tokens.split(`:`);
        addressBookArr[name] = address;

    }

    let entries = Object.entries(addressBookArr)
    entries.sort((a, b) => a[0].localeCompare(b[0]))

    let sortedAddressBook = {};

    for (let [name, address] of entries) {
        sortedAddressBook[name] = address;
    }

    for (let [name, address] of Object.entries(sortedAddressBook)) {
        console.log(name, `->`, address);
    }

}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])