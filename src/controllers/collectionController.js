const city =require("../models/city.js")

const addCollection = async (req, res ) =>{
    try {
        
        const cities = [
            {
                    name: "Paris",
                    country: "France",
                    description: " they speak french there",
                    urlimage: "https://i.imgur.com/gdGutTR.jpg"
            },
            {
                    name: "Rome",
                    country: "Italy",
                    description: " Mamma mia",
                    urlimage: "https://i.imgur.com/5QUVhtq.jpg"
            },
            {
                    name: "Sydney",
                    country: "Australia",
                    description: " Aye' mate",
                    urlimage: "https://i.imgur.com/WFdLhpd.jpg"
            },
            {
                    name: "Tokyo",
                    country: "Japan",
                    description: " Man I love sushi",
                    urlimage: "https://i.imgur.com/9IkfZkD.jpg"
            },
            {
                    name: "Beiging",
                    country: "China",
                    description: "Forbiden city",
                    urlimage: "https://i.imgur.com/R4usk2l.jpg"
            },
            {
                    name: "Rio de Janeiro",
                    country: "Brazil",
                    description: " Samba du Janeiro",
                    urlimage: "https://i.imgur.com/h4nD6Ge.jpg"
            },
            {
                    name: "Cairo",
                    country: "Egypt",
                    description: " walk like an egyptian",
                    urlimage: "https://i.imgur.com/nInWLsN.jpg"
            },
            {
                    name: "Moscow",
                    country: "Russia",
                    description: " White russian",
                    urlimage: "https://i.imgur.com/1toKyFi.jpg"
            },
            {
                    name: "Toronto",
                    country: "Canada",
                    description: " Mapple syrup",
                    urlimage: "https://i.imgur.com/a6SKGkU.jpg"
            },
            {
                    name: "Mumbai",
                    country: "India",
                    description: " Budha greets you",
                    urlimage: "https://i.imgur.com/gZm6Hli.jpg"
            },
            {
                    name: "London",
                    country: "United Kingdom",
                    description: " 5 o' clock Tea",
                    urlimage: "https://i.imgur.com/VRTnfFS.jpg"
            },
            {
                    name: "Lleida",
                    country: "Spain",
                    description: " close to Barcelona",
                    urlimage: "https://i.imgur.com/zhVqltH.jpg"
            },
            {
                    name: "Rafaela",
                    country: "Argentina",
                    description: " The west pearl",
                    urlimage: "https://i.imgur.com/9xLpyXv.jpg"
            },
            {
                    name: "Tuxpan",
                    country: "Mexico",
                    description: " Beautiful beaches and history",
                    urlimage: "https://i.imgur.com/l9lNfSY.jpg"
            },
        
            {
                    name: "New York",
                    country: "US",
                    description: " Sinatra's first love",
                    urlimage: "https://i.imgur.com/F0A5Jiy.jpg"
            }
        
        
        ]
        

        const collectionAdded = await city.insertMany(cities)
        
        res.status(200).json({
            message: "added cities to Mytinerary",
            "collection": collectionAdded
        
        })
        
    } 
    catch (error) {
        res.status(500).json({message: error.message})
    }
}
module.exports ={addCollection}