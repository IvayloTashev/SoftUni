const express = require(`express`);
const { configExpress } = require(`./config/express`);
const { configHbs } = require("./config/hbs");
const { router } = require("./config/routes");

const PORT = 3000;

const app = express();

configExpress(app);
configHbs(app);
app.use(router);

app.listen(PORT, console.log("The app is running at port/: 3000"))



