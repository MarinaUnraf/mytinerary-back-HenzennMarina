/* this file   details  the settings for the project to connect itself to a database*/
const mongoose = require('mongoose'); /* imports mongoose for the db conection */


const uri = process.env.URI_DB/* addres link to the database on mongo atlas */



    /*  connect method needs a url address returns a promise bc is an async function. .then returns a response if the promise is fullfill  */
    mongoose.connect(uri)
            /*  .then and .catch need to recibe a callback function to avoid recursive messages */
            .then( ()=>{
                console.log("succesfully connected with database")
            })
            .catch(()=>{
                console.log("error connecting with database")
            }) 


