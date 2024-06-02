const fs = require(`fs/promises`);
const { Movie } = require("../models/Movie");

async function getAllMovies() {
    const movies = await Movie.find().lean();
    return movies;
}

async function getMovieById(id) {
    const movie = await Movie.findById(id).lean().populate("cast");
    return movie;
}

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

async function attachCastToMovie(movieId, castId) {
    const movie = await Movie.findById(movieId);

    if (!movie) {
        throw new Error(`Movie ${movieId} not found`)
    }

    movie.cast.push(castId);

    await movie.save();

    return movie;
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    movieFilter,
    attachCastToMovie
}
