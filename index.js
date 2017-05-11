const express        = require('express'),
      bodyParser     = require('body-parser'),
      MostWatchedDao = require('./most_watched/MostWatchedDao'),

      app            = express(),
      port           = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended: true}));   //For parsing POST requests
app.use('/assets', express.static(`${__dirname}/public`));
app.use(express.static(__dirname + '/public'));


app.all('/', (req, res) => {
   res.sendFile(`assets/`);
});

app.get('/getAllMostWatched', (req, res) => {
    console.log('GET request: /getAllMostWatched');
    res.json(MostWatchedDao.getAllMostWatched());
});

app.post('/getMostWatched', (req, res) => {
    console.log('POST request: /getMostWatched');
    res.json(MostWatchedDao.getMostWatched(+req.body.id));
});

app.get('/getMostWatchedByLimit', (req, res) => {
    console.log('GET request: /getMostWatchedByLimit');
    res.json(MostWatchedDao.getMostWatchedByLimit(+req.query.min, +req.query.max));
});

app.get('/getMostWatchedByLanguage', (req, res) => {
    console.log('GET request: /getMostWatchedByLanguage');
    res.json(MostWatchedDao.getMostWatchedByLanguage(req.query.lang));
});

app.all('*', (req, res) => {
    res.redirect('/assets/error.html');
});

app.listen(port, () => console.log(`Server is listening on ${port}`));