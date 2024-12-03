const { Router } = require('express')
const { postsCreate, posts } = require('../Controller/postController')
 
const postModel = require("../Models/postSchema")
const postRoute = Router()
 
 
 
postRoute.get('/posts', posts)
 
postRoute.post('/posts', postsCreate)
 
 
 
module.exports = postRoute