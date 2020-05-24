import { DATA_TYPES, Model } from "https://deno.land/x/denodb/mod.ts";

export default class Contact extends Model {
  static table = "contacts";
  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    name: DATA_TYPES.STRING,
    surname: DATA_TYPES.STRING,
    email: DATA_TYPES.STRING,
  };
}
