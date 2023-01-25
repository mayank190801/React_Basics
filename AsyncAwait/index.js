//Fetch some data from API, then what baby?? - Asynchronous Programming babyyy!

//Promise is like an object in javascript - waits for data to be done
//You can invoke it like a class
//Whichever promises happens first will return its output, simple as that
const axios = require("axios");

//this returns something for sure
const data = axios.get("https://catfact.ninja/fact");
console.log(data);

data
  .then((some) => {
    console.log(some.data.fact);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise Resolved");
  });

//suppose this above shit takes time then what
const event = new Promise((resolve, reject) => {
  const name = "Mayank";
  if (name === "Mayank") {
    return resolve(name);
  }
  return reject("Name was not mayank");
});

//function that will be called if we resolved and reject
event
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("happens always bro");
  });
