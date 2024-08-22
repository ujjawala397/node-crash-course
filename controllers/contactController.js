const asyncHandler = require("express-async-handler");
const Contact =require("../models/contactModel");


//@desc Get all contacts
//@route Get /api/contact
//@acess public
const getContacts = asyncHandler(async(req,res)=>{
    const contacts= await Contact.find({user_id :req.user.id});
    res.status(200).json(contacts);
})

//@desc Get particular contact
//@route Get /api/contact/:id
//@acess public
const getContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    res.status(200).json(contact);
});

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
        user_id:req.user.id,
    });
    res.status(201).json(contact);
})

//@desc Update Contact
//@route Put /api/contact/:id
//@acess public
const updateContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const {name,email,phone} = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedContact);
})

//@desc Delete particular contacts
//@route Delete /api/contact/:id
//@acess public
const deleteContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.deleteOne();
    res.status(201).json(contact);
})


module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};