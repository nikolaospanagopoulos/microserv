import express from "express";

const router = express.Router()

router.route("/api/users/currentuser").get((req,res)=>{
     
    res.send("nikos")
})

export {router as currentuserRouter}