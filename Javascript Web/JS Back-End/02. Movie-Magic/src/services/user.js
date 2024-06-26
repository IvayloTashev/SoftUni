const { User } = require("../models/user")
const becrypt = require("bcrypt");

async function register(email, password) {
    const existing = await User.findOne({ email });

    if (existing) {
        const err = new Error("Email already exist");
        err.errors = { email: "Email already exist" };
        throw err;
    }

    hashedPassword = await becrypt.hash(password, 10);

    const user = new User({
        email,
        password: hashedPassword
    });

    await user.save();

    return user;
}

async function login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Incorrect email or password");
    }

    const match = await becrypt.compare(password, user.password);

    if (!match) {
        throw new Error("Incorrect email or password");
    }

    return user;
}

module.exports = {
    register,
    login
}

