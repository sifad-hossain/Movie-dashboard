import { getMovieReviewData } from "./data.js";
console.log(getMovieReviewData());

function init() {
    const movieReviewData = getMovieReviewData();

    painStatistics(movieReviewData)
}

function painStatistics(movieReviewData) {
    const flatReviewData = movieReviewData.flat();

    const totalMovies = movieReviewData.length
    const totalReviews = flatReviewData.length
    const totalRating = flatReviewData.reduce((acc, item) => {
        return acc + item.rating;
    }, 0)
    const avgRating = (totalRating / totalReviews).toFixed(2);

    const totalMoviesEi = document.getElementById("totalMoviesId")
    addStat(totalMoviesEi, totalMovies)


    const avgRatingEl = document.getElementById("totalAvgRatingId")
    addStat(avgRatingEl, avgRating)


    const totalReviewsEi = document.getElementById("totalReviewsId")
    addStat(totalReviewsEi, totalReviews)


}

function addStat(elem, value) {
    const spanEl = document.createElement("span")
    spanEl.classList.add("text-5xl")
    spanEl.innerText = value;
    elem.appendChild(spanEl)
}

init();