const env = Deno.env.toObject();

export const APP_PORT = parseInt(env.APP_PORT) || 8080;

export const DATABASE = {
  PORT: parseInt(env.DB_PORT),
  HOST: env.DB_HOST || "127.0.0.1",
  USER: env.DB_USER,
  PASS: env.DB_PASS,
  NAME: env.DB_NAME,
};
