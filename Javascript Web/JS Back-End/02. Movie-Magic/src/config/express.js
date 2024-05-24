const express = require(`express`)

function configExpress(app) {
    app.use(express.urlencoded());
    app.use("/static", express.static("static"))
}

module.exports = {
    configExpress
}