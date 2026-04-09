import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({limit : "16kb"})) //setting limit, dont want infinite json data
app.use(express.urlencoded({extended: true, limit: "16kb"})) //makes us understand url encodings
app.use(express.static("public")) // stores public files in folders like pdfs, images
app.use(cookieParser()) //so we can perfrom operations on the cookies that are present on the user server

export { app }