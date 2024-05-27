const express = require(`express`);

const handlebars = require(`express-handlebars`);
const { homeController } = require("./controllers/homeController");
const { addCatGet } = require("./controllers/addCatController");
const { addBreedGet, addBreedPost } = require("./controllers/addBreedController");

const app = express();

const hbs = handlebars.create();

app.set("view engine", ".handlebars");
app.engine(".handlebars", hbs.engine);

app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("static"));

app.get("/", homeController);
app.get("/cats/add-cat", addCatGet);
app.get("/cats/add-breed", addBreedGet);
app.post("/cats/add-breed", addBreedPost)

app.listen(3000);

