const city =require("../models/city.js")

const addCity = (req, res ) =>{
    const addedCity = new city({
        name: "Sydney",
        country: "Australia",
        description: " aye' mate",
        urlimage: "https://www.example.com/sydney.jpg"
    })

    addedCity.save()
    res.json({
        addedCity
    })

}

module.exports = {addCity}