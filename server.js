const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
require('./helpers/helpers');

app.get('/', (req, res) => {

    res.render('index', {
        nombre: 'Miguel'
    });
});
app.get('/about', (req, res) => {

    res.render('about');
});
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});