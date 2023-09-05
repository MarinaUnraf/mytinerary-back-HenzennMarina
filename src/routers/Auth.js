const express = require('express')
const authRouter = express.Router()
const validator =require('../middlewares/validator.js')
const { registerUser }= require('../controllers/AuthController.js')

authRouter.post('/register',validator ,registerUser)

module.exports = authRouter