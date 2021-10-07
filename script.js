
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
    const ape = Math.round(data.span/data.height * 100)/100;
    const ape2 = data.span - data.height;
    data.ape = ape;
    data.ape2 = ape2;
    database.insert(data);
    console.log(ape);
    response.json(data);
});
// var fs = require('fs');

// var myArray = [];
// const myForm = document.getElementById("myForm");

// myForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     var name = document.getElementById('name').value;
//     var height = document.getElementById('height').value;
//     var span = document.getElementById('span').value;
//     myArray.push(name);
//     data = {
//         name: name,
//         height: Number(height),
//         span: Number(span)
//     }
//     var jsonData = JSON.stringify(data);
//     // fs.writeFile('words.json', jsonData, finished);
//     console.log(jsonData);
// })
