const mostWatchedJson    = require('./data/most_watched.json'),
      config             = require('./config');

/**
 * MostWatchedDao is a static class that handles all the data.
 * Meaning: no need to create a new instance of it.
 * Just use it like this: MostWatchedDao.getAllMostWatched()
 * @type {MostWatchedDao}
 */
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
        return this.error(config.idNotExistsDesc);
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
        return this.error(config.limitExceptionDesc);
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
        return this.error(config.localExceptionDesc);
    }

    /**
     * Return Error with a description
     * @param description
     * @return object
     */
    static error(description) {
        console.log(`error: ${description}`);
        config.jsonError['description'] = description;
        return config.jsonError;
    }
};