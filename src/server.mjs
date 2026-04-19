import { createApp } from "./app.mjs";
import { env } from "./config/env.mjs";

const app = createApp();

app.listen(env.port, () => {
  console.log(`Server starting on port: ${env.port}`);
});
