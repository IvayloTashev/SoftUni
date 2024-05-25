const express = require(`express`);
const { home, details, search } = require("../controllers/catalog");
const { aboutController } = require("../controllers/about");
const { createGet, createPost } = require("../controllers/movie");
const { notFound } = require("../controllers/404");

const router = express.Router();

router.get("/", home);
router.get("/details/:id", details);
router.get("/about", aboutController);
router.get("/create", createGet);
router.post("/create", createPost);
router.get("/search", search);


router.get("*", notFound);

module.exports = {
    router
}