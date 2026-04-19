import express from "express";
import cors from "cors";
import { rootRouter } from "./routes/index.mjs";
import { notFoundMiddleware } from "./middlewares/not-found.middleware.mjs";
import { errorMiddleware } from "./middlewares/error.middleware.mjs";

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(rootRouter);
  app.use(notFoundMiddleware);
  app.use(errorMiddleware);

  return app;
}
