

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    // EMAIL!
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    }

},{
    timestamps:true,
});



export const userModel = mongoose?.models?.user || mongoose.model('user' , userSchema);