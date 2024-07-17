const express=  require('express');
const router = express.Router();
const jwt= require('jsonwebtoken');
const zod = require('zod');
const { JWT_SECRET } = require('../config');
const signupBody=  zod.object({
    username:zod.string().email(),
    firstname:zod.string(),
    lastname:zod.string(),
    password:zod.string()
})

router.post('/signup', async(req, res) => {
    const {success} =signupBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ error: "Invalid input" });
    }
   //if user alredy exist
    const existingUser= await user.findOne({ 
        username: req.body.username
    })
    if (existingUser){
        return res.status(400).json({ error: "Username already exists" });
    }
    //create user in db
    const user=  await user.create({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password
    })
    const userId =user._id
    const token = await jwt.sign({
        userId
    }, JWT_SECRET)
    res.json({
        message:'user created successfully',
       token: token
    })
    const signupBody=zod.object({
        username: zod.string().email(),
        password: zod.string()
    })
})

router.post('/signin', async(req, res) => {
    const {success}=signupBody.safeParse(req.body)
    if (!success) {
        return res.status(400).json({ error: "Invalid input" });
    }
    const user= await user.findOne({
        username: req.body.username,
        password: req.body.password
    })
    if (user){
        const userId = user._id
        const token = await jwt.sign({
            userId
        }, JWT_SECRET)
        res.json({
            message:'user signed in successfully',
            token: token
        })
    }
     res.status(411).json({ error: "erroe whille login" });
})

module.exports = router