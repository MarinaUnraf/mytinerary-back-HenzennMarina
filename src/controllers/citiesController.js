const city =require("../models/city.js")

/* Add city controller */
const addCity = async (req, res ) =>{
    try {
        //const cityInfo = req.body /*  using req body for take data from a json */
        const cityInfo = req.query
        
        //console.log(cityInfo)

        const cityAdded = await city.create(cityInfo)
        
        res.Status(200).json({
            message: "added city to Mytinerary",
            "city": cityAdded
        })
        
    } 
    catch (error) {
        res.status(500).json({message: error.message})
    }
}

/* Get all the cities on the collection controller */

const getCities = async (req, res) =>{
   try {
       let cities =  await city.find()
    
      res.status(200).json(
       cities
      )
    
   } catch (error) {
            res.status(500).json({message: error.message})
   }
   
}

/* Get one city by Id controller using queries */
const getCity = async (req, res) =>{
   try {

        let {id}= req.query
       let cityFound =  await city.findById({_id: id})
    
      res.status(200).json(
            {
                "message": "city found",
                "city": cityFound
            }
      )
   
   } catch (error) {
            res.status(500).json({message: error.message})
   }
   
}

/* Delete one city  using ID query controller */
const deleteCity = async (req, res) =>{
   try {
       
        let {id}= req.query
       let cityToDelete =  await city.deleteOne({_id: id})
    
      res.status(200).json(
            {
                "message": "city removed",
                "city": cityToDelete
            }
      )
    
   } catch (error) {
            res.status(500).json({message: error.message})
   }
   
}

/* Update info on a city using req body controller */
const updateCity = async (req, res) =>{
   try {
        let updateData = {
            name: req.body.name,
            country: req.body.country,
            description: req.body.description,
            urlimage: req.body.urlimage
        }

        let {id}= req.params /* using params to find the object to update */
       let cityToUpdate =  await city.findByIdAndUpdate({_id: id}, updateData)
    
      res.status(200).json(
            {
                "message": "city updated",
                "city": cityToUpdate
            }
      )
    
   } catch (error) {
            res.status(500).json({message: error.message})
   }
   
}




module.exports = {addCity, getCities, getCity, updateCity, deleteCity}