import multer from "multer";

//this file multer has on its own

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb){
    cb(null, file.originalname) //whatever user uploaded, give me that filename, though nit good, as if user has multiple files of same name that will overwrite 
  }
})

export const upload = multer({storage,})