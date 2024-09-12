const { User } = require('../models/User');
const bcrypt = require('bcrypt');

async function register(email, firstName, lastName, password) {
    const existing = await User.findOne({ email });

    if (existing) {
        throw new Error('this email already exists');
    }

    const user = new User({
        email,
        firstName,
        lastName,
        password: await bcrypt.hash(password, 10)
    });

    await user.save();

    return user;
};

async function login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Incorrect email or password');
    }

    match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error('Incorrect email or password');
    }

    return user;
};

async function logout() {

};

module.exports = {
    register,
    login,
    logout
}