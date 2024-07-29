//@desc Get all contacts
//@route Get /api/contact
//@acess public
const getContacts = (req,res)=>{
    res.status(200).json({message : "get all contacts" });
}

//@desc Get particular contact
//@route Get /api/contact/:id
//@acess public
const getContact = (req,res)=>{
    res.status(200).json({message : `get contact ${req.params.id}` });
}

//@desc Create all contacts
//@route Post /api/contact
//@acess public
const createContact = (req,res)=>{
    res.status(201).json({message : `Create contact`});
}

//@desc Update Contact
//@route Put /api/contact/:id
//@acess public
const updateContact =(req,res)=>{
    res.status(200).json({message:`Update Contact ${req.params.id}`})
}

//@desc Delete particular contacts
//@route Delete /api/contact/:id
//@acess public
const deleteContact = (req,res)=>{
    res.status(201).json({message : `Delete contact ${req.params.id}`});
}



module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};