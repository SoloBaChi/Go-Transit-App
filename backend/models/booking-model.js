const mongoose = require('mongoose')

const BookingSchema = new Schema({
    depature: {
        type: String,
        required: true
    },
    destination:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    time:{},
    seatNumber:{
        type: String,
        required: true
    },
    numberOfSeats:{
        type: Number,
        required: false
    },
    price:{
        type: Number,
        required: true
    }
})
const Bookmodel = mongoose.model('Booking', BookingSchema)

module.exports = Bookmodel