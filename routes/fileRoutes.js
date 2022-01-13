const express = require('express');
const {createPath,createDir,createFile,getFile,getDir, getAll,delDir,delFile, switchFile, switchDir}=require('../controllers/fileController')
const router = express.Router();

router.post('/addpath', createPath);
router.post('/addfile', createFile);
router.post('/addDir', createDir);
router.post('/getdir',getDir)
router.post('/getfile',getFile)
router.post('/getAll',getAll)
router.post('/delDir',delDir)
router.post('/delFile',delFile)
router.post('/switchFile',switchFile)
router.post('/switchDir',switchDir)
module.exports=router