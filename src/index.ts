import "https://deno.land/x/dotenv/load.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";
import { initializeDatabase } from "./config/database.ts";
import * as env from "https://deno.land/x/dotenv/mod.ts";
import { APP_PORT } from "./config/environment.ts";
import { router } from "./routes.ts";

env.config();

initializeDatabase();

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`🦕 Server is running on port ${APP_PORT}`);
await app.listen({ port: APP_PORT });
