const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"please add the contact name"],
    },
    email:{
        type:String,
        required:[true,"please add the contact email"],
    },
    phone:{
        type:String,
        required:[true,"please add the contact phone number"],
    },
},
    {
        timestamps:true,
    }
)
modules.exports=mongoose.model("Contact", contactSchema);