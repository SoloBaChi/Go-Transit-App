const express = require('express')
const { createBooking } = require('../controllers/booking-controllers.js')


bookingRouter = express.Router()


bookingRouter.post("/create", createBooking)

module.exports =  bookingRouter;