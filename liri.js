require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

const [, , command, ...search] = process.argv;

const searchTerm = search.join(' ');

console.log(command, search, searchTerm);

switch (command) {
    case 'spotify-this-song':
        spotifyThisSong(searchTerm);
        break;
    default: 
        console.log('I do not know what command that is!');
}


function spotifyThisSong(query) {
    spotify
        .search({ type: 'track', query })
        .then(function (response) {
            //   response.tracks.items.forEach(item => console.log(item));
            console.log(response.tracks.items[0]);
        })
        .catch(function (err) {
            console.log(err);
        });
}
