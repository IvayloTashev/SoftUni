const { getAllMovies, getMovieById, movieFilter } = require("../services/movie")

module.exports = {
    home: async (req, res) => {
        console.log(req.user);
        const movies = await getAllMovies();
        res.render("home", { movies });
    },

    details: async (req, res) => {
        const id = req.params.id;
        const movie = await getMovieById(id);

        if (!movie) {
            res.render("404");
            return;
        }

        movie.starRating = "&#x2605".repeat(movie.rating);

        res.render("details", { movie });
    },

    search: async (req, res) => {
        const queryParams = req.query;
        const movies = await getAllMovies();

        const filter = movieFilter(movies, queryParams);

        res.render("search", { filter, queryParams });
    }
}