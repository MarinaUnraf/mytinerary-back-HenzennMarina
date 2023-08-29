const {Schema, model, Types} = require ("mongoose"); /*  imports the schema and model component from mongoose */

/* instances a new schema object with the structure to use fro the data */
const schemaItinerary= new Schema({
        
        name:{
            type: String,
            required: true,
        },
        userName:{
            type: String,
            required: true,
        },
        userImage:{
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
         city: {
            type: Types.ObjectId,
            Ref: "city"
            
        },
         likes: {
            type: [String],
            required: true,
        },
         comments: {
            type: [String]
            
        },
         activities: {
            type: [String],
            
        },
         hashtags: {
            type: [String],
            required: true,
        }
})
/*   create a model based on the schema defined before. needs 2 params: used schema and name*/

const itinerary = model("itinerary", schemaItinerary)

/* exports the model itinerary */
module.exports = itinerary