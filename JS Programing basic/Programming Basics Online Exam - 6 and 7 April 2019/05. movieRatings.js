function movieRatings(input) {

    let numberOfMovies = Number(input[0]);
    let avgRaiting = 0;
    let bestRatedMovie = "";
    let worstRatedMovie = "";
    let bestRaiting = 0;
    let worstRating = 200;

    for (let i = 1; i <= (numberOfMovies * 2); i++) {

        let currentMovie = input[i];
        i++;
        let currentRating = Number(input[i]);
        avgRaiting += currentRating;

        if (currentRating > bestRaiting) {
            bestRaiting = currentRating;
            bestRatedMovie = currentMovie;
        }

        if (currentRating < worstRating) {
            worstRating = currentRating;
            worstRatedMovie = currentMovie;
        }

    }

    console.log(`${bestRatedMovie} is with highest rating: ${bestRaiting.toFixed(1)}`);
    console.log(`${worstRatedMovie} is with lowest rating: ${worstRating.toFixed(1)}`);
    console.log(`Average rating: ${(avgRaiting / numberOfMovies).toFixed(1)}`);

}

movieRatings(["5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"])
