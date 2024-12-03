
const {Schema,Mongoose, default: mongoose }= require ("mongoose")

const PostSchema = {
    username:{type:String,require:true},
   posts:[{type:mongoose.Types.ObjectId,ref:"Post"}]
}

const useModel = mongoose.model("users",userSchema);
    
module.exports=userModel;