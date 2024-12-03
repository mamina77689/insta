const userModel = require('../Models/userSchema')
 
const signup = async(req, res) => {
    const { username, password, email, profileImg } = req.body
 
    try{
        const res = await userModel.create({
            username: username,
            password: password,
            email: email,
            profileImg: profileImg,
        })
 
        res.send(res)
 
    }catch(err){
        res.send(err)
    }
}
 
 
const login = async(req, res) => {
    const {email, password} = req.body
 
    try{
        const data = await userModel.find({email: email})
 
        res.send(data)
    }catch(err){
        res.send(err)
    }
}
 
 
module.exports = { signup, login }