const express = require('express')
const authRouter = express.Router()
const {validator }=require('../middlewares/validator.js')
const { registerUser, userLogin }= require('../controllers/AuthController.js')
const {hashPassword} = require('../middlewares/auth.js')

authRouter.post('/register',validator, hashPassword,registerUser)
authRouter.post('/login', validator,userLogin)

module.exports = authRouter