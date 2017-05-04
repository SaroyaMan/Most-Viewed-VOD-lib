const express     = require('express'),
      app         = express(),
      bodyParser  = require('body-parser'),
      port        = process.env.PORT || 3000,
    MostViewedDao = require('./most_viewed/MostViewedDao');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/assets', express.static(`${__dirname}/public`));

app.get('/getAllMostViewed', (req, res) => {
    console.log('GET request: /getAllMostViewed');
    res.json(MostViewedDao.getAllMostViewed());
});

app.post('/getMostViewed', (req, res) => {
    console.log('POST request: /getMostViewed');
    res.json(MostViewedDao.getMostViewed(+req.body.id));
});

app.get('/getMostViewedByLimit', (req, res) => {
    console.log('GET request: /getMostViewedByLimit');
    res.json(MostViewedDao.getMostViewedByLimit(+req.query.min, +req.query.max));
});

app.all('*', (req, res) => {
    res.redirect('/assets/error.html');
});

app.listen(port, () => console.log(`Server is listening on ${port}`));