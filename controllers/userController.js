const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User =require("../models/userModel");

//Register user
const registerUser = asyncHandler(async(req,res)=>{
    const {username,email,password} =req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields required");
    }

    const userAvailable =await User.findOne({email});

    if(userAvailable){
        res.status(400);
        throw new Error("User already Exist");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password,10);
    console.log("Hashed Passwor : ",hashedPassword);
    
    const user = await User.create({
        username,
        email,
        password :hashedPassword,
    })
    console.log(`User created ${user}`);
    if(user){
        res.status(201).json({_id:user.id,email: user.email});
    }
    else{
        res.status(400);
        throw new Error("User data is not valid");
    }
    res.json({message:"Register user"});

})

// Login User
const loginUser = asyncHandler(async(req,res)=>{
    res.json({message:"Login user"});
})


const currentUser = asyncHandler(async(req,res)=>{
    res.json({message:"Current user"});
})



module.exports ={
    registerUser,
    loginUser,
    currentUser
}