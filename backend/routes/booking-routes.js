import express from 'express'
import { createBooking } from '../controllers/booking-controllers.js'


const bookingRouter = express.Router()


bookingRouter.post("/create", createBooking)

export default bookingRouter;