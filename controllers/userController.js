const asyncHandler = require("express-async-handler");

//Register user
const registerUser = asyncHandler(async(req,res)=>{
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