import {model, Schema} from "mongoose"

const userCollection = "users"

const userSchema = new Schema({
    name: {type: String, required: true},
    password: {type:String, required:true},
    email: {type: String, required: true, unique: true}
})

export const userModel = model(userCollection, userSchema)