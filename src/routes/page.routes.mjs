import { Router } from "express";
import { getHomePage } from "../controllers/page.controller.mjs";

const pageRouter = Router();

pageRouter.get("/", getHomePage);

export { pageRouter };
