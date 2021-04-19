const express = require('express')
const app = express()

require('dotenv').config()
const mongoose = require('mongoose');
let user = process.env.DB_USER
let pass = process.env.DB_PASS
const uri = "mongodb+srv://" + user + ":" + pass
    + "@cluster0.pk1lb.mongodb.net/wbdv-spr21-jhz?retryWrites=true&w=majority";

mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true});

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}))


// Configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./controllers/quizzes-controller')(app)
require('./controllers/question-controller')(app)
require('./controllers/quiz-attempts-controller')(app)


app.listen(8000)