//Syntactic sugar all it is
//But how to use it bro???? - Teach me na
const axios = require("axios");

//async function bruh
//Like this is the concept at the end of the day == right , pretty same always bruh
const fetchData = async () => {
  //this returns something for sure
  //For error handling use try and catch
  try {
    const data = await axios.get("https://catfact.ninja/fact"); //something that returns promise,
    console.log(data.data.fact);
  } catch (err) {
    console.log(err);
  }
};

fetchData();
