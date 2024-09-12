const { homeRouter } = require("../controllers/home");
const { recipeRouter } = require("../controllers/recipe");
const { userRouter } = require("../controllers/user")

function configRoutes(app) {

    app.use(recipeRouter);
    app.use(userRouter);
    app.use(homeRouter);
    
}

module.exports = { configRoutes }