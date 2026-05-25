import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema ({
    title:String,
    content:String,
    image:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
})
const Post = mongoose.model("Post", PostSchema)
export default Post