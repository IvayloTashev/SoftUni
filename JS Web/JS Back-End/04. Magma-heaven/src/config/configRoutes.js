// TODO inport routers

const { catalogRouter } = require("../controllers/catalog")
const { userRouter } = require("../controllers/user")
const { volcanoRouter } = require("../controllers/volcano")

function configRoutes(app) {
    // TODO register routers
    app.use(userRouter);
    app.use(volcanoRouter);
    app.use(catalogRouter);
}

module.exports = { configRoutes }