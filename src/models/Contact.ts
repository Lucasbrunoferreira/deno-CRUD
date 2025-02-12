import { DATA_TYPES, Model } from "https://deno.land/x/denodb/mod.ts";

export default class Contact extends Model {
  static table = "contacts";
  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DATA_TYPES.STRING,
      required: true,
    },
    surname: {
      type: DATA_TYPES.STRING,
      required: true,
    },
    email: {
      type: DATA_TYPES.STRING,
      required: true,
    },
  };
}
