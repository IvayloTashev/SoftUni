const { getAllBreeds, createCat } = require("../services/service");


module.exports = {
    addCatGet: async (req, res) => {
        breeds = await getAllBreeds();
        res.render("addCat", { breeds });
    },

    addCatPost: async (req, res) => {
        const result = await createCat(req.body);
        res.redirect("/");
    }
}