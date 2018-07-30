const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// create application/json parser
let jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false });
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, "./survey/survey.html"));
});





























app.listen(3000);