import mongoose, {Schema} from "mongoose"; //destructuring schema, so that we dont have to write mongoose.schema, rather can simply write schema
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { use } from "react";

const userSchema = new Schema({
  username:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true, // done so that a field is more searchable though expensive (comes in searching of database)
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  avatar: {
    type: String, // cloudnary url
    required: true,
  },
  coverImage: {
    type: String
  },
  watchHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video"
    }
  ],
  password: {
    type: String, //usually, we encrypt the password, because if database leaks, then these are leaked too
    required: [true, 'Password is required']
  },
  refreshToken: {
    type: String
  }

},{timestamps: true})

userSchema.pre("save", async function (next) {
  if(!this.isModified("password")) return next();

  this.password = bcrypt.hash(this.password, 10)// this is problematic, because even if user changes something other than password and saves, password is encrypted differently
  next()
})

//method to check if password user sends is correct or not
userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password) // this.password is encrypted password that bcrypt saved
}

userSchema.methods.generateAccessToken = function(){ // usually this process doesnt take time so no need of async
 return jwt.sign(
    {
     _id: this._id, // left is name of payload, rigth is coming from database
     email: this.email,
     username: this.username,
     fullName: this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}
userSchema.methods.generateRefreshToken = function(){
  return jwt.sign(
    {
     _id: this._id, //only id is required since it kees refreshing
     
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}
export const User = mongoose.model("User",userSchema);