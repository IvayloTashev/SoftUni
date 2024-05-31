module.exports = {
    createCastGet: (req, res) => {
        res.render("cast-create");
    },

    createCastPost: (req, res) => {
        console.log(req.body)
        res.end();
    }
};