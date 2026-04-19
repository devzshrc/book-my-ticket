import pg from "pg";
import { env } from "./env.mjs";

export const pool = new pg.Pool(env.db);
