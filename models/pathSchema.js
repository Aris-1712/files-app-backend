const mongoose = require("mongoose");

const pathSchema=new mongoose.Schema({
    path:{
        type:String,
        required:true
    }
})

const Path=mongoose.model("Path",pathSchema)
module.exports=Path