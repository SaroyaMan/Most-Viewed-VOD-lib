const express         = require('express'),
      bodyParser      = require('body-parser'),
      MostViewedDao   = require('./most_viewed/MostViewedDao'),
      app             = express(),
      port            = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended: true}));   //For POST requests
app.use('/assets', express.static(`${__dirname}/public`));
app.use(express.static(__dirname + '/public'));

app.all('/', (req, res) => {
   res.sendFile(`assets/`);
});

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