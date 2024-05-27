const fs = require('fs/promises');
const { readFile, writeFile } = require('../services/breed');

module.exports = {
    addBreedGet: (req, res) => {
        res.render("addBreed");
    },

    addBreedPost: async (req, res) => {
        const newBreed = req.body.breed;

        const breeds = await readFile();
        breeds.push(newBreed);
        await writeFile(breeds);
        
        res.redirect("/");
    }
};
