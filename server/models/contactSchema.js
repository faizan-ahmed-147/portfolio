const mongoose = require ('mongoose');
const dotenv = require("dotenv")
dotenv.config({ path: './config.env'})

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
        
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
  


});

const User = mongoose.model('Contact-user', userSchema);
module.exports = User;