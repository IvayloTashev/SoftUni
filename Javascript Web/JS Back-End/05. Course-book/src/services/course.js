const { Course } = require('../models/Course');
const { User } = require('../models/User');

async function getAll() {
    return Course.find().lean();
}

async function getById(id) {
    return Course.findById(id).lean();
}

async function getRecent() {
    return Course.find().sort({ $natural: -1 }).limit(3).lean();
}

async function create(data, authorId) {
    const record = new Course({
        title: data.title,
        type: data.type,
        certificate: data.certificate,
        image: data.image,
        description: data.description,
        price: data.price,
        author: authorId
    });

    await record.save();

    return record
}

async function update(id, data, userId) {
    const record = await Course.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found' + id)
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied')
    }

    record.title = data.title,
        record.type = data.type,
        record.certificate = data.certificate,
        record.image = data.image,
        record.description = data.description,
        record.price = data.price,

        await record.save();

    return record;
}

async function getAuthor(authorId) {
    const author = await User.findById(authorId);

    if (!author) {
        throw new Error('Author not found' + authorId);
    }

    return author;
}

async function signUp(courseId, userId) {
    await Course.findByIdAndUpdate(courseId, { $push: { signUpList: userId } });
    await User.findByIdAndUpdate(userId, { $push: { courseList: courseId } });
}

function getCreatedCourses(userId) {
    let courses = Course.find({ author: userId }).lean();
    return courses;
}

function getSignUpCourses(userId) {
    let courses = User.findById(userId).populate('courseList').lean();
    return courses;
}

async function deleteById(id, userId) {
    const record = await Course.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found' + id)
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied')
    }

    await Course.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    getById,
    getRecent,
    create,
    update,
    getAuthor,
    signUp,
    getCreatedCourses,
    getSignUpCourses,
    deleteById
}