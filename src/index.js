//require('dotenv').config({path: './env'})

import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running at port : ${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("MONGO db connection failed !!!", err);
})











//this immediate function is executed immediately, starts with ;, because if previous statement doesnt have it, there might be problem
//this approach is one of the basic approaches
/*
import express from "express"
const app = express();
;( async () => {    // async await used as we might get delay due to db being in another continent
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`) // listeners next
    app.on("error", (error)=>{
      console.log("ERROR:", error)
      throw error
    })
    app.listen(process.env.PORT, ()=>{     // app.listen if connection is succesfull
      console.log(`App is listening on port ${process.env.PORT}`)
    })
  }
  catch(error){
    console.error("ERROR:", error)
    throw error
  }
})()*/