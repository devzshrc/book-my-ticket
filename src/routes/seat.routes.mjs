import { Router } from "express";
import { getSeats } from "../controllers/seat.controller.mjs";
import { asyncHandler } from "../utils/async-handler.mjs";

const seatRouter = Router();

seatRouter.get("/seats", asyncHandler(getSeats));

export { seatRouter };
