const env = Deno.env.toObject();

export const APP_PORT = parseInt(env.APP_PORT) || 8080;
