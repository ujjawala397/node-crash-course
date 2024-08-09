const asyncHandler = require("express-async-handler");
const Contact =require("../models/contactModel");


//@desc Get all contacts
//@route Get /api/contact
//@acess public
const getContacts = asyncHandler(async(req,res)=>{
    const contacts= await Contact.find();
    res.status(200).json(contacts);
})

//@desc Get particular contact
//@route Get /api/contact/:id
//@acess public
const getContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message : `get contact ${req.params.id}` });
})

//@desc Create all contacts
//@route Post /api/contact
//@acess public
const createContact = asyncHandler(async (req,res)=>{
    console.log("request body is : ", req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);
})

//@desc Update Contact
//@route Put /api/contact/:id
//@acess public
const updateContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Update Contact ${req.params.id}`})
})

//@desc Delete particular contacts
//@route Delete /api/contact/:id
//@acess public
const deleteContact = asyncHandler(async (req,res)=>{
    res.status(201).json({message : `Delete contact ${req.params.id}`});
})



module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};