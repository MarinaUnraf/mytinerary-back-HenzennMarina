const express = require("express") /*  require calls express module and saves it in a const methond  using commonjs-  esm module uses import */
const cors = require("cors")
 
const router = require("./routers/router.js") /* imports the router module to be used by app */

require("dotenv").config() 
require("./config/db.js") /*  tries to connect to the database*/



const app = express() /* executes express method in a const called app. Later app can call the inherit methods from express */

app.use(express.json())/* permits to work with json data */
app.use(cors()) /* import cors */



app.use("/api",router) /* configures the use of the router in the server, /api is the default root  */

const Port = process.env.PORT
app.listen(Port, ()=> {             /* method that listens requests of the port and returns a callback function */

    console.log("listening on port "+ Port);
})
