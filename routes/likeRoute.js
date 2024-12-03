const Route =require("express");
const likeModel = require("../Models/likeSchema");
const postModel=require("../Models/postSchema");

const likeRoute = Route();

likeRoute.post("/post/like",async (req,res)=>{
    const {postId,userId} = req.body;
    const likeResponse= await likeModel.create({
        postId,
        userId,
    });
    postModel 
}) 