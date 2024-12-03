const postModel = require('../Models/postSchema')
const userModel = require('../Models/userSchema')
 
const postsCreate = async(req, res) => {
    const { caption, postImg, userId } = req.body
 
    try{
        const createdPost = await postModel.create({
            caption,
            postImg,
            userId
        })
 
        const response = await userModel.findByIdAndUpdate(userId, {
            $push: {
                posts: createdPost._id,
            },
        })
 
 
        res.send(response)
    }catch(err){
        console.log(err)
        res.send(err)
    }
}
 
const chingchongdingdongcoronavirus19= async(req,res)=>{}
 
const posts = async(req, res) => {
    try{
        const posts = await postModel.find().populate("userId", "email username _id profileImg")
 
        res.json(posts)
    }catch (err){
        res.send(err)
    }
}
 
 
 
 
module.exports = { postsCreate, posts }