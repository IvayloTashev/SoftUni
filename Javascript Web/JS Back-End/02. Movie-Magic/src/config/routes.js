const express = require(`express`);
const { home, details, search } = require("../controllers/catalog");
const { aboutController } = require("../controllers/about");
const { createMovieGet, createMoviePost, editGet, editPost, deleteGet, deletePost} = require("../controllers/movie");
const { notFound } = require("../controllers/404");
const { createCastGet, createCastPost } = require("../controllers/cast");
const { attachCastGet, attachCastPost } = require("../controllers/attachCast");
const { userRouter } = require("../controllers/user");
const { isGuest, isUser } = require("../middlewares/guards");

const router = express.Router();

function configRoutes(app) {
    //TODO
}

router.get("/", home);
router.get("/about", aboutController);
router.get("/search", search);

router.get("/details/:id", details);
router.get("/attach/:id", isUser(), attachCastGet);
router.post("/attach/:id", isUser(), attachCastPost);
router.get("/edit/:id", isUser(), editGet);
router.post("/edit/:id", isUser(), editPost);
router.get("/delete/:id", isUser(), deleteGet);
router.post("/delete/:id", isUser(), deletePost);


router.get("/create/movie", isUser(), createMovieGet);
router.post("/create/movie", isUser(), createMoviePost);
router.get("/create/cast", isUser(), createCastGet);
router.post("/create/cast", isUser(), createCastPost);

router.use(userRouter);

router.get("*", notFound);

module.exports = {
    router
}