const express = require('express') /* imports express into the router module */
const {getClients} = require('../controllers/clientsController.js')/* importing the controllers for the clients endpoint. In the controller  we can put funtions for different endpoints */
const router = express.Router()/*  calls the router method from express and saves it in the router const */


/* starts to work with   HTTP requests  in the endpoint router  */

router.get("/clients/:id", getClients)/* handles 2 parameters, the first one is an string(the endpoint), the second one is a function, usually a callback one with the req and res params that are request object and response object. the endpoint can pass params to the controller for use it later */
 module.exports = router /* exports the module to use it in another file  by exmaple in app.js */