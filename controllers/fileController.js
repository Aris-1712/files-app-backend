const Files=require('../models/fileSchema')
const Path=require('../models/pathSchema')
const Directory=require('../models/directorySchema')

const createPath=async(req,res,next)=>{
    try {
        let path=req.body.path
        let newPath=new Path({
            path
        })
        await newPath.save()
        res.status(200).json({
            success:true
        })
    } catch (error) {
        next(error)
    }
}

const createFile=async(req,res,next)=>{
    try {
        let {path,fileName,data}=req.body
        let check=await Files.findOne({path,fileName})
        if(check){
            res.status(400).send({success:false,message:"Cannot create file with same name at this path"})
            return
        }
        let newFile=new Files({
            path,fileName,data,deleted:false
        })
        await newFile.save()
        res.status(200).json({
            success:true
        })
    } catch (error) {
        next(error)
    }
}
const getFile=async(req,res,next)=>{
    try {
        let {path}=req.body
        let files=await Files.find({path})
        res.status(200).json({
            success:true,
            data:files
        })
    } catch (error) {
        next(error)
    }
}
const createDir=async(req,res,next)=>{
    try {
        let {path,dirName}=req.body
        let check=await Directory.findOne({path,dirName})
        if(check){
            res.status(400).send({success:false,message:"Cannot create folder with same name at this path"})
            return
        }
        let newDir=new Directory({
            path,dirName,deleted:false
        })
        await newDir.save()
        res.status(200).json({
            success:true
        })
    } catch (error) {
        next(error)
    }
}
const delDir=async(req,res,next)=>{
    try {
        let {path,dirName}=req.body
        let check=await Directory.findOne({path,dirName,deleted:false})
        if(!check){
            res.status(400).send({success:false,message:"Folder does not exist"})
            return
        }
        let update=await Directory.findOneAndUpdate({path,dirName,deleted:false},{deleted:true})
        res.status(200).json({
            success:true
        })
    } catch (error) {
        next(error)
    }
}
const switchDir=async(req,res,next)=>{
    try {
        let {path,dirName}=req.body
        let check=await Directory.findOne({path,dirName})
        if(!check){
            res.status(400).send({success:false,message:"Folder does not exist"})
            return
        }
        let update=await Directory.findOneAndUpdate({path,dirName},{deleted:!check.deleted})
        res.status(200).json({
            success:true
        })
    } catch (error) {
        next(error)
    }
}
const switchFile=async(req,res,next)=>{
    try {
        let {path,fileName}=req.body
        let check=await Files.findOne({path,fileName})
        if(!check){
            res.status(400).send({success:false,message:"File does not exist"})
            return
        }
        console.log(check.deleted)
        let update=await Files.findOneAndUpdate({path,fileName},{deleted:!check.deleted})
        console.log(update)
        res.status(200).json({
            success:true
        })
    } catch (error) {
        next(error)
    }
}
const delFile=async(req,res,next)=>{
    try {
        let {path,fileName}=req.body
        let check=await Files.findOne({path,fileName,deleted:false})
        if(!check){
            res.status(400).send({success:false,message:"File does not exist"})
            return
        }
        let update=await Files.findOneAndUpdate({path,fileName,deleted:false},{deleted:true})
        res.status(200).json({
            success:true
        })
    } catch (error) {
        next(error)
    }
}

const getDir=async(req,res,next)=>{
    try {
        let {path}=req.body
        let dirs=await Directory.find({path})
        res.status(200).json({
            success:true,
            data:dirs
        })
    } catch (error) {
        next(error)
    }
}
const getAll=async(req,res,next)=>{
    try {
        let {path}=req.body
        let dirs=await Directory.find({path,deleted:false})
        let files=await Files.find({path,deleted:false})
        res.status(200).json({
            success:true,
            data:[...dirs,...files]
        })
    } catch (error) {
        next(error)
    }
}

module.exports={createPath,createFile,createDir,getDir,getFile,getAll,delDir,delFile,switchDir,switchFile}