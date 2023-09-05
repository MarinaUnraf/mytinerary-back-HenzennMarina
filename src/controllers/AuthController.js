const User = require('../models/user.js')

const registerUser = async (req, res)=>{
     let {firstName, surname, password, urlimage, country, email} = req.body    
    
    try {

            const newUser = new User({
                firstName,
                surname,
                email,
                password,
                country,
                urlimage
                
            })

            await newUser.save()
            res.status(200).json(
             {
                 "message": "user registered",
                 "user": newUser
             }
       )
            
        } catch (error) {
            
        }

}



module.exports= {registerUser}