const mostViewedJson = require('./data/most_viewed.json'),

      //Json error in case of bad use
      jsonError = {
        "error": "Video(s) is not found"
      },
      idNotExistsDesc    = "ID is not exists",
      limitExceptionDesc = "No results for videos with this limit of views";

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
        jsonError['description'] = idNotExistsDesc;
        return jsonError;
    }

    /**
     * Get most viewed movies with number of views defined by limits
     * @param min
     * @param max
     * @return array
     */
    static getMostViewedByLimit(min, max) {
        let mostViewedMovies = [], isError;
        if (isNaN(min)) min = 0;
        if (isNaN(max)) max = Number.MAX_SAFE_INTEGER;
        if (min === 0 && max === Number.MAX_SAFE_INTEGER) isError = true;
        if(!isError) {
            for(let movie of mostViewedJson) {
                if(+movie.views >= min && +movie.views <= max) {
                    mostViewedMovies.push(movie);
                }
            }
            if(mostViewedMovies.length > 0) return mostViewedMovies;
        }
        //else: Error...
        jsonError['description'] = limitExceptionDesc;
        return jsonError;
    }
};