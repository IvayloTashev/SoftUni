const fs = require('fs/promises');
const { readFileBreed, writeFileBreed } = require('../services/service');

module.exports = {
    addBreedGet: (req, res) => {
        res.render("addBreed");
    },

    addBreedPost: async (req, res) => {
        const newBreed = req.body.breed;

        const breeds = await readFileBreed();
        breeds.push(newBreed);
        await writeFileBreed(breeds);
        
        res.redirect("/");
    }
};
