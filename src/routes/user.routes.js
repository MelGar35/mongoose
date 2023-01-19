import {Router} from "express"
import {userModel} from "../models/user.model.js"

const router = Router()

router.get("/", async (req,res) => {
    try {
        const users = await userModel.find()
        res.json(users)
    } catch (error) {
        res.json({error})
    }
})

router.get("/:id", async (req,res)=>{
    try{
        const user = await userModel.findById(req.params.id)
        res.json({user})
    } catch(error){
        res.json({error:error.message})
    }
})


export default router