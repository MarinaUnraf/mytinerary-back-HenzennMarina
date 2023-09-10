const express = require('express')
const authRouter = express.Router()

/* routes to authenticate the user inside the system */
const {validator }=require('../middlewares/validator.js')
const { registerUser, userLogin, authenticated, userLogout }= require('../controllers/AuthController.js')
const {hashPassword, verifyUserExists, verifyPassword, generateToken, passportVerificator} = require('../middlewares/auth.js')

authRouter.post('/register',validator, hashPassword,registerUser)
authRouter.post('/login', validator,verifyUserExists,verifyPassword,generateToken,userLogin)
authRouter.post('/authenticated',passportVerificator.authenticate("jwt", {session:false}),generateToken,authenticated)
authRouter.post('/logout',passportVerificator.authenticate("jwt", {session:false}),userLogout)

module.exports = authRouter