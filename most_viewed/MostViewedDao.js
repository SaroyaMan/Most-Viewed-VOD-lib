const mostViewedJson = require('./data/most_viewed.json');

//MostViewedMoviesDao is a static class that handles all the data.
module.exports = class MostViewedDao {

    /**
     * Get all most viewed movies
     * @return array
     */
    static getAllMostViewed() {
        return mostViewedJson;
    }

    /**
     * Get most viewed movie by ID
     * @param id
     * @return object
     */
    static getMostViewed(id) {
        for(let movie of mostViewedJson) {
            if(+movie.id === id) {
                return movie;
            }
        }
    }

    /**
     * Get most viewed movies with number of views defined by limits
     * @param min
     * @param max
     * @return array
     */
    static getMostViewedByLimit(min, max) {
        let mostViewedMovies = [];
        for(let movie of mostViewedJson) {
            if(+movie.views >= min && +movie.views <= max) {
                mostViewedMovies.push(movie);
            }
        }
        return mostViewedMovies;
    }
};