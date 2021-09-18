const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    district: {
<<<<<<< HEAD
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
=======
        type: mongoose.Schema.Types.ObjectId,
        ref: "Districts",
        required: true
>>>>>>> loadoutnguyen
    },
    phone: {
        type: String,
        required: true,
        trim: true
<<<<<<< HEAD
=======
    },
    img: {
        type: Object
>>>>>>> loadoutnguyen
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Users', UserSchema)