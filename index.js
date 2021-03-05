const fetch = require('node-fetch');
var fs = require('fs');
var request = require('request');

const fileContents = fs.readFileSync('pokemonlist.txt', 'utf8')
const pokemonArray = fileContents.split('\n');
var sizeOfArray = pokemonArray.length

for (let i = 0; i < sizeOfArray; i++) {
 var url = "https://pokeapi.co/api/v2/pokemon/" + pokemonArray[i];
 
 fetch(url)
 .then(function(response) {
    return response.json()
  })
 .then(function(data){
     if (data.types.length === 3) {
         console.log(`${pokemonArray[i]}: ${data.types[0].type.name}, ${data.types[1].type.name}, ${data.types[2].type.name}`);
     } else if (data.types.length === 2) {
         console.log(`${pokemonArray[i]}: ${data.types[0].type.name}, ${data.types[1].type.name}`);
     } else {
      console.log(`${pokemonArray[i]}: ${data.types[0].type.name}`);
     }
   })
 }
