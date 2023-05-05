import mongoose from 'mongoose'
import User from "../models/user-model.js"
import Booking from "../models/booking-model.js"

export const createBooking = async(req, res, next) => {
    const {departure, destination, date, time, seatNumber, numberOfSeats, price} = req.body;

    let existingUser;
    try{
        existingUser = await User.findById(User);
    } catch(err) {
        return console.log(err)
    }
    if(!existingUser) {
        return res.status(400).json({message:  "Unable To Find User By This ID"})
    }
    const booking = new Booking({departure, destination, date, time, seatNumber, numberOfSeats, price})
    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        await booking.save({session})
        existingUser.bookings.push(booking)
        await existingUser.save({session})
        session.commitTransaction();
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: err})
    }
    return res.status(200).json({booking})
} 

export const getBookings= async(req, res, next) => {
    let bookings;
    try{
        bookings = await Booking.findbyId(User)
    } catch(err){
        return console.log(err)
    }
    if(!bookings){
        return res.status(404).json({message: "No Bookings Found"})
    }
    return res.status(200).json(bookings)
}