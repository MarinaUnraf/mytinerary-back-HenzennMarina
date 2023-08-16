/* imports connection with database */
require("./db.js")
/* import and require  structure from model */
const city = require("../models/city.js")

const cities = [
    {
            name: "Paris",
            country: "France",
            description: " they speak prench there",
            urlimage: "https://www.example.com/paris.jpg"
    },
    {
            name: "New York",
            country: "US",
            description: " murrica fuck yea",
            urlimage: "https://www.example.com/new-york.jpg"
    }


]
/* calls the method and gets a response using .then and .catch */
city.insertMany(cities)
.then(()=>{
    console.log("data inserted");
})
.catch((error)=>{
    console.log(error);
})