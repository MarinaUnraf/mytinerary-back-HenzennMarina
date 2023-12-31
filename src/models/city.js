const {Schema, model, Types} = require ("mongoose"); /*  imports the schema and model component from mongoose */

/* instances a new schema object with the structure to use fro the data */
const schemaCity = new Schema({
        name:{
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
          _itineraries: [{
            type: Types.ObjectId,
            ref:'itinerary' 
            
        }],
        urlimage:{
            type: String,
            required: true
        }
})
/*   create a model based on the schema defined before. needs 2 params: used schema and name*/

const City = model("city", schemaCity)

/* exports the model city */
module.exports = City