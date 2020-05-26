import { Context } from "https://deno.land/x/oak/mod.ts";
import { httpStatus } from "../helpers/httpStatus.ts";
import Contact from "../models/Contact.ts";
import logger from "../config/logger.ts";

export async function getAllContacts({ response }: Context) {
  try {
    const contacts = await Contact.all();

    response.status = httpStatus.OK;
    response.body = contacts;
  } catch (err) {
    logger.error(err);
    response.status = httpStatus.INTERNAL_SERVER_ERROR;
  }
}

export async function saveContact({ request, response }: Context) {
  try {
    const body = await request.body();

    const result = await Contact.create(body.value);

    response.status = httpStatus.CREATED;
    response.body = result;
  } catch (err) {
    logger.error(err);
    response.body = err;
    response.status = httpStatus.INTERNAL_SERVER_ERROR;
  }
}
