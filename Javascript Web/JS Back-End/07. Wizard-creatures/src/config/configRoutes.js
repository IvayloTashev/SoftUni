const { creatureRouter } = require("../controllers/creature");
const { homeRouter } = require("../controllers/home")
const { userRouter } = require("../controllers/user")

function configRoutes(app) {
    app.use(userRouter);
    app.use(creatureRouter);
    app.use(homeRouter);
}

module.exports = { configRoutes }