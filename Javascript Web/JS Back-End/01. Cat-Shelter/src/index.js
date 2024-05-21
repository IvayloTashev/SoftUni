const express = require(`express`);
const handlebars = require(`express-handlebars`);
const { homeController } = require("./controllers/homeController");
const { addCatController } = require("./controllers/addCatController");
const { addBreedController } = require("./controllers/addBreedController");

const app = express();

const hbs = handlebars.create();

app.set("view engine", ".handlebars")
app.engine(".handlebars", hbs.engine);

app.use("/static", express.static("static"))

app.get("/", homeController);
app.get("/cats/add-cat", addCatController)
app.get("/cats/add-breed", addBreedController)

app.listen(3000);

