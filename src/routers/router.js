const express = require('express') /* imports express into the router module */
/* importing the controllers for the clients endpoint. In the controller  we can put funtions for different endpoints */
const {addCity, getCities, getCity, updateCity, deleteCity} = require('../controllers/citiesController.js')
const { addCollection } = require('../controllers/collectionController.js')
const router = express.Router()/*  calls the router method from express and saves it in the router const */


/* starts to work with   HTTP requests  in the endpoint router  */

/* handles 2 parameters, the first one is an string(the endpoint), the second one is a function, usually a callback one with the req and res params that are request object and response object. the endpoint can pass params to the controller for use it later */
/* CRUD routers   */
router.get("/cities", getCities)
router.post("/cities", addCollection)
router.post("/city", addCity)
router.get("/city/:id", getCity)
router.put("/city/:id", updateCity)
router.delete("/city", deleteCity)










module.exports = router /* exports the module to use it in another file  by exmaple in app.js */