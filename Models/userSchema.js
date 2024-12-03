
const {Schema,Mongoose, default: mongoose }= require ("mongoose")

const PostSchema = {
    email:{type: String ,require:true} ,
    password:{type:String,require:true},
    username:{type:String,require:true},
   profileImage:{type:String},
   bio:{type:String},
   posts:[{type:mongoose.Types.ObjectId,ref:"Post"}],
    following:[{type:mongoose.Types.ObjectId,ref:"useSchema"}],
    followers:[{type:mongoose.Types.ObjectId,ref:"useSchema"}]
}

const useModel = mongoose.model("users",userSchema);
    
module.exports=userModel;
