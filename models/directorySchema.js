const mongoose = require("mongoose");

const directorySchema = new mongoose.Schema({
    path:{
        type:String,
        required:true
    },
    dirName:{
        type:String,
        required:true
    },
    deleted:{
        type:Boolean,
        required:true
    },
    type:{
        type:String,
        default:"dir"
    }
},{timestamps:true});

const Directory=mongoose.model("Directory",directorySchema)

module.exports=Directory
