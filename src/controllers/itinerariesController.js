const itinerary =require('../models/itinerary.js')


const addItinerary = async (req, res ) =>{
    try {
        /*  using req body for take data from a json */
        const itineraryInfo = req.body
        
        //console.log(itineraryInfo)

        const itineraryAdded = await itinerary.create(itineraryInfo)
        
            res.status(200).json({
                message: "added itinerary to city",
                "itinerary": itineraryAdded
        })
        
    } 
    catch (error) {
        res.status(500).json({message: error.message})
    }
}

/* Get all the itineraries on the collection*/

const getItineraries = async (req, res) =>{
   
   try {
       let itineraries =  await itinerary.find()
    
            res.status(200).json(
            itineraries
      )
    
   } catch (error) {
            res.status(500).json({message: error.message})
   }
   
}

/* Get one itinerary by Id controller using queries */
const getItinerary = async (req, res) =>{
   try {

        let {id}= req.params
        let itineraryFound =  await itinerary.findById(id)
    
      res.status(200).json(
            {
                "message": "itinerary found",
                "Itinerary": itineraryFound
            }
      )
   
   } catch (error) {
            res.status(500).json({message: error.message})
   }
   
}


/* Update info on an itinerary using req body controller */
const updateItinerary = async (req, res) =>{
   try {
        let updateData = {
            name: req.body.name,
            userName: req.body.userName,
            userImage: req.body.userImage,
            price: req.body.price,
            duration: req.body.duration,
            likes: req.body.likes,
            hastags: req.body.hastags,
            city: req.body.city
        }

        let {id}= req.params /* using params to find the object to update */
       let itineraryToUpdate =  await itinerary.findByIdAndUpdate({_id: id}, updateData)
    
      res.status(200).json(
            {
                "message": "itinerary updated",
                "city": itineraryToUpdate
            }
      )
    
   } catch (error) {
            res.status(500).json({message: error.message})
   }
   
}

/* Delete one itinerary  using ID query controller */
const deleteItinerary = async (req, res) =>{
    try {
        
         let {id}= req.query
        let itineraryToDelete =  await itinerary.deleteOne({_id: id})
     
       res.status(200).json(
             {
                 "message": "itineray removed",
                 "city": itineraryToDelete
             }
       )
     
    } catch (error) {
             res.status(500).json({message: error.message})
    }
    
 }
















module.exports = {getItineraries, getItinerary, addItinerary, updateItinerary, deleteItinerary}