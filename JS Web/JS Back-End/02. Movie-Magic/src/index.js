const express = require(`express`);
const { configExpress } = require(`./config/express`);
const { configHbs } = require("./config/hbs");
const { configRoutes } = require("./config/routes");
const { configDatabase } = require("./config/database");

const PORT = 3000;

async function start() {
    const app = express();

    await configDatabase();
    configExpress(app);
    configHbs(app);
    configRoutes(app);

    app.listen(PORT, () => {
        console.log(`Application running on port: ${PORT}`);
    });
};

start();










