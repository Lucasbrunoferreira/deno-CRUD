import { Database } from "https://deno.land/x/denodb/mod.ts";
import { DATABASE } from "./environment.ts";
import logger from "./logger.ts";

import Contact from "../models/Contact.ts";

export const initializeDatabase = () => {
  try {
    const database = new Database("postgres", {
      database: DATABASE.NAME,
      host: DATABASE.HOST,
      username: DATABASE.USER,
      password: DATABASE.PASS,
      port: DATABASE.PORT,
    });

    database.link([Contact]);
    database.sync({ drop: true });
  } catch (err) {
    logger.error(err);
  }
};
