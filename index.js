#!/mnt/c/users/richie/desktop/richie/sdi/git/async-checkpoin/en node

const yargs = require("yargs");
const axios = require("axios");
const fetch = require('node-fetch');

var fs = require('fs');
var request = require('request');

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .argv;

 /* var pokemonArray = function (filepath, callback) {
     const fileContents = fs.readFile(filePath, 'utf8', function (err, content){
        if (err) {
          callback(err)
        } else {
          const pokemon = content.split("\n")
          callback(err, pokmeon)
        }    
      });
 }; */

 pokemonArray = function () {
     (__dirname + 'pokemonlist.txt', function(content) {
    const pokemon = content.split("\n");
    return pokemon;
 });
};

 var url = "https://pokeapi.co/api/v2/pokemon/" + pokemonArray[1];
 
 fetch(url)
  .then(function(data){
    console.log(data)
  });

/* for (let i = 0; i < pokemonArray.length; i++) {
  var url = "https://pokeapi.co/api/v2/pokemon/" + pokemonArray[i];

 axios.get(url, { headers: { Accept: "application/json" } })
 .then(res => {
   console.log(res.data.joke);
 }); 
} */