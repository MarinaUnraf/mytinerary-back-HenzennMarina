const { verifyPassword } = require('../middlewares/auth.js')
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
       const {email, password} = req.body
       const userFounded = await User.findOne({email: email})

       if(userFounded){
            if(verifyPassword(password, userFounded.password)){
               return res.status(200).json({message: "Logged succesfully", user: userFounded })
                
            }else{
               return res.status(400).json({message: "Wrong password, please try again"})
            }



       }else{
            res.status(400).json({message: "User not found"})
       }

    } catch (error) {
        res.status(400).json({message: error.message})
    }
}



module.exports= {registerUser, userLogin}