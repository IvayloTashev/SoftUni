const { electronicsRouter } = require("../controllers/electronics");
const { homeRouter } = require("../controllers/home")
const { userRouter } = require("../controllers/user")

function configRoutes(app) {
    app.use(electronicsRouter);
    app.use(userRouter);
    app.use(homeRouter);
}

module.exports = { configRoutes }