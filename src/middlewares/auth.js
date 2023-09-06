const bcrypt = require('bcrypt')

const hashPassword = (req, res, next)=>{

    try {
        const passPlain = req.body.password

        const hashPassword =bcrypt.hashSync(passPlain ,10)

        req.body.password = hashPassword
        
        next()
    
    } catch (error) {

        res.status(500).json({error: error })
    }
};

 const verifyPassword = (passPlain, hashPassword) =>{

    const isValid= bcrypt.compareSync(passPlain,hashPassword)
   return isValid
 }

module.exports = {hashPassword, verifyPassword}