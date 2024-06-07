const express = require("express")
const cookieParser = require("cookie-parser");

const sacret = "what a sacret" 

function configExpress(app) {
    app.use(cookieParser(sacret));
    app.use(express.urlencoded());
    app.use("/static", express.static("static"))
}

module.exports = {
    configExpress
}