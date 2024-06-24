const cloudinary = require('cloudinary').v2;
const multer = require('multer')
const {CloudinaryStorage} = require("multer-storage-cloudinary")
//configure cloudinary
cloudinary.config({
  cloud_name:"dhzaqsffn",
  api_key:"548869479611315",
  api_secret:"dMAV4JsibDeFie3l_3KDiF68mzk"
})
//configure cloudinary storage
let clstorage = new CloudinaryStorage({
  cloudinary:cloudinary,
  params:{
    folder:"userdata",
    //to overcome the issue of duplicate files, we add time stamp
    public_id:(request,file)=>file.fieldname+"-"+Date.now()
  }
})
//configure multer
let multerObj=multer({storage:clstorage})
module.exports = multerObj;