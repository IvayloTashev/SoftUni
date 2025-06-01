class User {
    private _username!: string;

    constructor(username: string) {
        this.username = username;
    }

    get username(): string {
        return this._username;
    }

    set username(newUsername: string) {
        if (newUsername.length < 3) {
            throw new Error('Username must be at least 3 characters long')
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

