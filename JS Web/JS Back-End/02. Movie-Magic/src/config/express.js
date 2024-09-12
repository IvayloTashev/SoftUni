const express = require("express")
const cookieParser = require("cookie-parser");
const { session } = require("../middlewares/session");

const sacret = "what a sacret" 

function configExpress(app) {
    app.use(cookieParser(sacret));
    app.use(session());
    app.use(express.urlencoded());
    app.use("/static", express.static("static"))
}

module.exports = {
    configExpress
}