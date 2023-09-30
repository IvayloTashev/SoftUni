function password(input) {

    let index = 0;

    let user = input[0];
    index++;

    let password = input[1];
    index++;

    let currentPassword = input[index];
    index++;

    while (currentPassword !== password) {

        currentPassword = input[index];
        index++;
    }

    console.log(`Welcome ${user}!`);

}

password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])
