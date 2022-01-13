const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    path:{
        type:String,
        required:true
    },
    fileName:{
        type:String,
        required:true
    },
    deleted:{
        type:Boolean,
        required:true
    },
    type:{
        type:String,
        default:"file"
    }
},{timestamps:true});

const File=mongoose.model("File",fileSchema)

module.exports=File
