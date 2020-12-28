//PART 1
//import fs and path
const fs = require('fs');
const path = require('path');

//create an array of five chirps
const chirpArray = [
    {
        chirpAuthor: 'Amanda',
        chirpText: 'Hello'
    },
    {
        chirpAuthor: 'Matt',
        chirpText: 'Whats up'
    },
    {
        chirpAuthor: 'Alex',
        chirpText: 'Hi there'
    },
    {
        chirpAuthor: 'Alexandra',
        chirpText: 'Howdy'
    },
    {
        chirpAuthor: 'Carolyn',
        chirpText: 'Hiiii'
    },
];

//create path for chirps.json
const chirpPath = path.join(__dirname, 'chirps.json');

//write 5 chirps to chirps.json
fs.writeFile(chirpPath, JSON.stringify(chirpArray), (err) => {
    if (err) console.log(err);
})

//create chirps.json and log to console
fs.readFile(chirpPath, {
    encoding: "UTF-8"
}, (err, data) => {
    console.log(data)
});

