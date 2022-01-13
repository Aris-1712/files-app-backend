const express = require('express');
const {createPath,createDir,createFile,getFile,getDir, getAll,delDir,delFile}=require('../controllers/fileController')
const router = express.Router();

router.post('/addpath', createPath);
router.post('/addfile', createFile);
router.post('/addDir', createDir);
router.post('/getdir',getDir)
router.post('/getfile',getFile)
router.post('/getAll',getAll)
router.post('/delDir',delDir)
router.post('/delFile',delFile)
module.exports=router