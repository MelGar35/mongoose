import express from "express"
import mongoose from "mongoose"
//import userRoutes from "./routes/user.routes.js"

const app = express()

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://Meli:Melisa537@noeserver.c5gx1p7.mongodb.net/cole?retryWrites=true&w=majority", (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Connected to Mongo Atlas");
    }
})

//app.use("/users", userRoutes)

app.listen(3000, ()=>console.log("server on port 3000"))