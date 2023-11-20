const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        message: "Please proivde a name"
    },
    email: {
        type: String,
        required: true,
        message: "Please proivde a valid email"

    },
    phone: {
        type: Number,
        required: true,
        message: "Please proivde a valid phone number"

    },
    preferredMethod: {
        type: String,
        enum: ["email", "phone"],
        required: true,
        message: "Please select either email or phone for a preffered contact method"
    }
})



module.exports = mongoose.model('Contact', contactSchema)
