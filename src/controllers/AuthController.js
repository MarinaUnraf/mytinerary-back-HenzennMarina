const User = require('../models/user.js')

const registerUser = async (req, res)=>{

     const userPayload = req.body 
     const userExists = await User.findOne({ email: userPayload.email})   
    
    try {
            if (userExists){
               return res.status(403).json({
                    message: "This user already exists"
                })
            }


            const newUser = await User.create(userPayload)


            
            res.status(200).json(
             {
                 "message": "user registered",
                 "user": newUser
             }
       )
            
        } catch (error) {
            res.status(400).json({message: error.message})
        }

}
const userLogin =  async (req, res )=>{

    try {
        res.status(200).json({
            message: "Succesfully logged in",
            token: req.token,
            user: {
                email: req.user.email,
                id: req.user._id,
                urlimage: req.user.urlimage,
                firstName: req.user.firstName

            }
        })

    } catch (error) {
        res.status(400).json({message: error.message})
    }
}



module.exports= {registerUser, userLogin}