const {Schema, model, Types} = require ("mongoose"); /*  imports the schema and model component from mongoose */

/* instances a new schema object with the structure to use fro the data */
const schemaUser = new Schema({
        firstName:{
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        urlimage:{
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true,
        },
        googleLog: {
            type: Boolean,
            default: false,
        }
})
/*   create a model based on the schema defined before. needs 2 params: used schema and name*/

const User = model("user", schemaUser)

/* exports the model user*/
module.exports = User