"use strict";
class User {
    _username;
    constructor(username) {
        this.username = username;
    }
    get username() {
        return this._username;
    }
    set username(newUsername) {
        if (newUsername.length < 3) {
            throw new Error('Username must be at least 3 characters long');
        }
        this._username = newUsername;
    }
}
const user = new User("Martin");
user.username = "johnDoe";
console.log(user.username);
// const user = new User("jo");
// const user = new User("Martin");
// console.log(user.username);
// user.username = "Do";
//# sourceMappingURL=10.%20gettersAndSetters.js.map