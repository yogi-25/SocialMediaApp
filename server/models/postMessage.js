import mongoose from "mongoose";
const postSchema = mongoose.Schema({
    title:String,
    message: String,
    creator :String,
    tags:[String],
    selectedFile:String,
    likeCOunt:{
        type:Number,
        default:0
    },
    createdAt: {
        type:Date,
        default:new Date()
    },


});
const postMesasge = mongoose.model('postMessage',postSchema);
