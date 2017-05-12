const mongoose       = require('mongoose'),
      Schema         = mongoose.Schema,
      MovieSchema    = new Schema({
          id: {type: Number, index: 1, required: true, unique: true},
          name: String,
          views: Number,
          localization: {
              language: String,
              subtitles: Boolean
          },
          description: String
      }, {collection: 'movies'});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;