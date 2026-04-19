import { Router } from "express";
import { updateSeatBookingById } from "../controllers/booking.controller.mjs";
import { asyncHandler } from "../utils/async-handler.mjs";

const bookingRouter = Router();

bookingRouter.put("/:id/:name", asyncHandler(updateSeatBookingById));

export { bookingRouter };
