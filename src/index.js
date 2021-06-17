require('dotenv').config()
const path = require('path')
const express = require('express')
const exphbs  = require('express-handlebars')
const app =  express()
const bodyParser = require('body-parser')
const  morgan = require('morgan')
const port = process.env.PORT || 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
app.use(morgan('dev'));
// Template Engine
app.engine('hbs', exphbs({
    extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
console.log(path.join(__dirname, 'resources\\views'));
// GET POST PUSH DELETE
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.listen(port, () => {
    console.log('Server listening at port: '+ port);
});

