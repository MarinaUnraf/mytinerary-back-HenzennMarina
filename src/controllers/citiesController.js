const city =require("../models/city.js")


const addCity = async (req, res ) =>{
    try {
        //const cityInfo = req.body /*  using req body for take data from a json */
        const cityInfo = req.query
        
        //console.log(cityInfo)

        const cityAdded = await city.create(cityInfo)
        
        res.json({
            message: "added city to Mytinerary",
        
        })
        
    } 
    catch (error) {
        res.json({message: error.message})
    }
}



const getCities = async (req, res) =>{
   try {
       let cities =  await city.find()
    
      res.json(
       cities
      )
    
   } catch (error) {
            res.json({message: error.message})
   }
   
}

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
            res.json({message: error.message})
   }
   
}

const deleteCity = async (req, res) =>{
   try {
       
        let {id}= req.query
       let cityTodelete =  await city.deleteOne({_id: id})
    
      res.status(200).json(
            {
                "message": "city removed",
                "city": cityToDelete
            }
      )
    
   } catch (error) {
            res.json({message: error.message})
   }
   
}


const updateCity = async (req, res) =>{
   try {
        let updateData = {
            name: req.body.name,
            country: req.body.country,
            description: req.body.description,
            urlimage: req.body.urlimage
        }

        let {id}= req.params
       let cityToUpdate =  await city.findByIdAndUpdate({_id: id}, updateData)
    
      res.status(200).json(
            {
                "message": "city updated",
                "city": cityToUpdate
            }
      )
    
   } catch (error) {
            res.json({message: error.message})
   }
   
}



module.exports = {addCity, getCities, getCity, updateCity, deleteCity}