const express = require("express") /*  require calls express module and saves it in a const methond  using commonjs-  esm module uses import */
 
const router = require("./router/router.js") /* imports the router module to be used by app */

const app = express() /* executes express method in a const called app. Later app can call the inherit methods from express */




app.use("/api",router) /* configures the use of the router in the server, /api is the default root  */


app.listen(3000, ()=> {             /* method that listens requests of the port and returns a callback function */

    console.log("listening on 3000");
})
