
// var button = select('#submit');
// button.mousePressed(submitWord);

// function submitWord() {
//     var word = select('#word').value();
// }

// console.log("testing");
console.log('server is starting')

var fs = require('fs');
        var myArray = [];
        const myForm = document.getElementById("myForm");
        
        myForm.addEventListener("submit", (e) => {
            e.preventDefault();
            var name = document.getElementById('name').value;
            var height = document.getElementById('height').value;
            var span = document.getElementById('span').value;
            myArray.push(name);
            data = {
                name: name,
                height: Number(height),
                span: Number(span)
            }
            var jsonData = JSON.stringify(data);
            fs.writeFile('words.json', jsonData, finished);
            console.log(jsonData);
        })
