
// var button = select('#submit');
// button.mousePressed(submitWord);

// function submitWord() {
//     var word = select('#word').value();
// }

// console.log("testing");
const { request, response } = require("express");
const Datastore = require('nedb');

var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.listen(port, () => console.log('testing server...'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
    //find with an empty object '{}' finds everything
    database.find({}, (err, data) => {
        if (err) {
            response.end();
            return; 
        }
        response.json(data);
    })
    
});

app.post('/api', (request, response) => {
    console.log(request.body);
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    const ape1 = Math.round(data.span/data.height * 100)/100;
    const ape2 = data.span - data.height;
    data.ape1 = ape1;
    data.ape2 = ape2;
    database.insert(data);
    console.log(ape1);
    response.json(data);
});


// NAV
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

