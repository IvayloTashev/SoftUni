const express = require(`express`);
const { home, details, search } = require("../controllers/catalog");
const { aboutController } = require("../controllers/about");
const { movieRouter } = require("../controllers/movie");
const { notFound } = require("../controllers/404");
const { createCastGet, createCastPost } = require("../controllers/cast");
const { attachCastGet, attachCastPost } = require("../controllers/attachCast");
const { userRouter } = require("../controllers/user");
const { isUser } = require("../middlewares/guards");

function configRoutes(app) {
    app.get("/", home);
    app.get("/about", aboutController);
    app.get("/search", search);

    app.get("/details/:id", details);
    app.get("/attach/:id", isUser(), attachCastGet);
    app.post("/attach/:id", isUser(), attachCastPost);

    app.use(movieRouter);

    app.get("/create/cast", isUser(), createCastGet);
    app.post("/create/cast", isUser(), createCastPost);

    app.use(userRouter);

    app.get("*", notFound);
}

module.exports = { configRoutes }