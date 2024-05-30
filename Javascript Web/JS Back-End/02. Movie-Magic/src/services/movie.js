const fs = require(`fs/promises`);
const { Movie } = require("../models/Movie");

const filePath = `./data/database.json`;

async function readFile() {
    const data = await fs.readFile(filePath);

    return JSON.parse(data.toString());
};

async function writeFile(data) {
    await fs.writeFile(filePath, JSON.stringify(data))
};


async function getAllMovies() {
    const movies = await Movie.find().lean();
    return movies;
};

async function getMovieById(id) {
    const movie = await Movie.findById(id).lean();
    return movie;
};

async function createMovie(movieData) {
    const movie = new Movie({
        title: movieData.title,
        genre: movieData.genre,
        director: movieData.director,
        year: Number(movieData.year),
        rating: Number(movieData.rating),
        description: movieData.description,
        imageURL: movieData.imageURL
    });

    await movie.save();

    return movie;
}

function movieFilter(movies, queryParams) {
    const { search, genre, year } = queryParams;

    let filter = null;

    if (!search && !genre && !year) {
        filter = movies;

    } else {
        filter = movies.filter(movie => {
            const matchesTitle = search ? movie.title.toLowerCase().includes(search.toLowerCase()) : true;
            const matchesGenre = genre ? movie.genre.toLowerCase().includes(genre.toLowerCase()) : true;
            const matchesYear = year ? movie.year.toString().includes(year.toString()) : true;
            return matchesTitle && matchesGenre && matchesYear;
        })
    }

    return filter;
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    movieFilter
}
