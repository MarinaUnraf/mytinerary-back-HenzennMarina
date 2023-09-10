const express = require('express')
const authRouter = express.Router()

/* routes to authenticate the user inside the system */
const {validator }=require('../middlewares/validator.js')
const { registerUser, userLogin }= require('../controllers/AuthController.js')
const {hashPassword, verifyUserExists, verifyPassword, generateToken} = require('../middlewares/auth.js')

authRouter.post('/register',validator, hashPassword,registerUser)
authRouter.post('/login', validator,verifyUserExists,verifyPassword,generateToken,userLogin)

module.exports = authRouter