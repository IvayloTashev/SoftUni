const express = require('express');
const { configDatabase } = require('./config/configDatabase');
const { confingExpress } = require('./config/configExpress');
const { confingHbs } = require('./config/configHbs');
const { configRoutes } = require('./config/configRoutes');

start();

async function start() {
    const app = express();

    await configDatabase();
    confingExpress(app);
    confingHbs(app);
    configRoutes(app);

    app.listen(3000, () => { console.log('Server started at port 3000') });
}





