const mostWatchedJson = require('./data/most_watched.json'),

      //Json error in case of bad use
      jsonError = {
        "error": "Video(s) is not found"
      },
      idNotExistsDesc    = "ID is not exists",
      limitExceptionDesc = "No results for videos with this limit of views",
      localExceptionDesc = "No results for videos with these subtitles and language";

function error(description) {
    jsonError['description'] = description;
    return jsonError;
}

//MostWatchedDao is a static class that handles all the data.
module.exports = class MostWatchedDao {

    /**
     * Get all most watched movies
     * @return array
     */
    static getAllMostWatched() {
        return mostWatchedJson;
    }

    /**
     * Get most watched movie by ID
     * @param id
     * @return object
     */
    static getMostWatched(id) {
        for(let movie of mostWatchedJson) {
            if(+movie.id === id) {
                return movie;
            }
        }
        return error(idNotExistsDesc);
    }

    /**
     * Get most watched movies with number of views defined by limits
     * @param min
     * @param max
     * @return array
     */
    static getMostWatchedByLimit(min, max) {
        let mostWatchedMoviesFiltered = [], isError;
        if (isNaN(min)) min = 0;
        if (isNaN(max)) max = Number.MAX_SAFE_INTEGER;
        if (min === 0 && max === Number.MAX_SAFE_INTEGER) isError = true;

        if(!isError) {
            for(let movie of mostWatchedJson) {
                if(+movie.views >= min && +movie.views <= max) {
                    mostWatchedMoviesFiltered.push(movie);
                }
            }
            if(mostWatchedMoviesFiltered.length > 0) return mostWatchedMoviesFiltered;
        }
        //else: Error...
        return error(limitExceptionDesc);
    }

    /**
     * Get most watched movies by language
     * @param language
     * @return array
     */
    static getMostWatchedByLanguage(language) {
        let mostWatchedMoviesFiltered = [];
        for(let movie of mostWatchedJson) {
            if(movie.localization.language  === language) {
                mostWatchedMoviesFiltered.push(movie);
            }
        }
        if(mostWatchedMoviesFiltered.length > 0) return mostWatchedMoviesFiltered;
        return error(localExceptionDesc);
    }
};