import "https://deno.land/x/dotenv/load.ts";

import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { APP_PORT } from "./config/environment.ts";

config();

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

console.log(`🦕 Server is running on port ${APP_PORT}`);
await app.listen({ port: APP_PORT });
