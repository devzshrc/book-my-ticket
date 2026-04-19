import { Router } from "express";
import { pageRouter } from "./page.routes.mjs";
import { seatRouter } from "./seat.routes.mjs";
import { bookingRouter } from "./booking.routes.mjs";
import { healthRouter } from "./health.routes.mjs";

const rootRouter = Router();

rootRouter.use(pageRouter);
rootRouter.use(healthRouter);
rootRouter.use(seatRouter);
rootRouter.use(bookingRouter);

export { rootRouter };
