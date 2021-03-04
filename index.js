#!/mnt/c/users/richie/desktop/richie/sdi/git/async-checkpoin/en node

const yargs = require("yargs");
const axios = require("axios");

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .argv;

const greeting = `Hello, ${options.name}!`;
console.log(greeting);

console.log("Here's a random joke for you:");

const url = "https://icanhazdadjoke.com/";

axios.get(url, { headers: { Accept: "application/json" } })
 .then(res => {
   console.log(res.data.joke);
 });