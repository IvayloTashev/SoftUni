const { User } = require("../models/user")
const becrypt = require("bcrypt");

async function register(email, password) {
    const existing = await User.findOne({ email });

    if (existing) {
        throw new Error("Email already exist");
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

}

module.exports = {
    register,
    login
}

