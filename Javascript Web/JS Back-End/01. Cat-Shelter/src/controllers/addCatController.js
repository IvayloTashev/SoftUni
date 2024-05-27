const { getAllBreeds } = require("../services/breed");


module.exports = {
    addCatGet: async (req, res) => {
        breeds = await getAllBreeds();
        res.render("addCat");
    },

    addCatPost: (req, res) => {
        
    }
}