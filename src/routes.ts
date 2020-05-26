import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getAllContacts,
  saveContact
} from "./controllers/contacts.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = `Contactcs API made with TypeScript - 🦕 Deno runtime.`;
});

router
  .get("/contacts", getAllContacts)
  .post("/contacts", saveContact)

export { router };
