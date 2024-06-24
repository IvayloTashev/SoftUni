const { User } = require('../models/User');
const bcrypt = require('bcrypt');

async function register(email, username, password) {
    const existing = await User.findOne({ email });

    if (existing) {
        throw new Error('this email already exists');
    }

    const user = new User({
        email,
        username,
        password: await bcrypt.hash(password, 10)
    });

    try {
        await user.save();
    } catch (err) {
        if (err.code == 11000) {
            throw new Error('Username already exist');
        }
    }

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