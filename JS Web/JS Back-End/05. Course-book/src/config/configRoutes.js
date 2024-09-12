const { catalogRouter } = require("../controllers/catalog");
const { courseRouter } = require("../controllers/course");
const { userRouter } = require("../controllers/user");

function configRoutes(app) {

    app.use(userRouter);
    app.use(courseRouter);
    app.use(catalogRouter);
}

module.exports = { configRoutes }