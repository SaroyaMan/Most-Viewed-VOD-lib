const mongoose = require('mongoose'),
      Movie    = require('./data/MostWatchedMovie'),
      consts   = require('./consts'),
      config   = require('./config');


//Mongoose connect + setup
mongoose.connect(consts.MLAB_KEY);  //Connect to Mlab database
mongoose.Promise = global.Promise;  //Bind between mongoose promises and defualt promises
mongoose.connection.on(consts.ERROR, (err) => console.log(`Connection error: ${err}`));
mongoose.connection.on(consts.OPEN,  ()    => console.log('Connected to Database '));


/**
 * Return Error with a description
 * It's a PRIVATE method as a part of MostWachedDao
 * @param description
 * @return object
 */
function error(description) {
    console.log(`error: ${description}`);
    config.jsonError['description'] = description;
    return config.jsonError;
}


/**
 * MostWatchedDao is a static class that handles all the data.
 * Meaning: no need to create a new instance of it.
 * Just use it like this: MostWatchedDao.getAllMostWatched()
 * @type {MostWatchedDao}
 */
module.exports = class MostWatchedDao {

    /**
     * Get all most watched movies
     * @return Promise
     */
    static getAllMostWatched() {
        return Movie.find()
                    .catch((err) => err);
    }

    /**
     * Get most watched movie by ID
     * @param id
     * @return Promise
     */
    static getMostWatchedById(id) {
        return Movie.findOne({id: id})
                    .catch(() => error(config.idNotExistsDesc));
    }

    /**
     * Get most watched movies with number of views defined by limits
     * @param min
     * @param max
     * @return Promise
     */
    static getMostWatchedByLimit(min, max) {
        if (isNaN(min)) min = 0;
        if (isNaN(max)) max = Number.MAX_SAFE_INTEGER;
        return Movie.find({views: {$gt: min - 1, $lt: max + 1}})
                    .catch( () => error(config.limitExceptionDesc));

    }

    /**
     * Get most watched movies by language
     * @param language
     * @return Promise
     */
    static getMostWatchedByLanguage(language) {
        return Movie.find({'localization.language': language})
                    .catch(() => error(config.localExceptionDesc));
    }
};