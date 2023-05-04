import mongoose, { model, Schema } from 'mongoose'

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true,
        minlength: 8
    }
})

export default model('User', UserSchema)