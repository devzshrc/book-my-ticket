import { DB_DEFAULTS, DEFAULT_PORT } from "../constants/app.constants.mjs";

export const env = {
  port: Number(process.env.PORT || DEFAULT_PORT),
  db: {
    host: process.env.DB_HOST || DB_DEFAULTS.host,
    port: Number(process.env.DB_PORT || DB_DEFAULTS.port),
    user: process.env.DB_USER || DB_DEFAULTS.user,
    password: process.env.DB_PASSWORD || DB_DEFAULTS.password,
    database: process.env.DB_NAME || DB_DEFAULTS.database,
    max: DB_DEFAULTS.max,
    connectionTimeoutMillis: DB_DEFAULTS.connectionTimeoutMillis,
    idleTimeoutMillis: DB_DEFAULTS.idleTimeoutMillis,
  },
};
