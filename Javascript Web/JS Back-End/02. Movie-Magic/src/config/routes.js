const express = require(`express`);
const { home, details, search } = require("../controllers/catalog");
const { aboutController } = require("../controllers/about");
const { createMovieGet, createMoviePost} = require("../controllers/movie");
const { notFound } = require("../controllers/404");
const { createCastGet, createCastPost } = require("../controllers/cast");

const router = express.Router();

router.get("/", home);
router.get("/details/:id", details);
router.get("/about", aboutController);
router.get("/create/movie", createMovieGet);
router.post("/create/movie", createMoviePost);
router.get("/create/cast", createCastGet);
router.post("/create/cast", createCastPost);
router.get("/search", search);

router.get("*", notFound);

module.exports = {
    router
}