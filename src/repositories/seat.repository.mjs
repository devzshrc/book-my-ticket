import { pool } from "../config/db.mjs";

export async function findAllSeats() {
  const result = await pool.query("select * from seats order by id asc");
  return result.rows;
}

export async function findAvailableSeatForUpdate(connection, seatId) {
  const sql = "SELECT * FROM seats where id = $1 and isbooked = 0 FOR UPDATE";
  const result = await connection.query(sql, [seatId]);
  return result;
}

export async function updateSeatBooking(connection, seatId, bookedName) {
  const sql = "update seats set isbooked = 1, name = $2 where id = $1";
  return connection.query(sql, [seatId, bookedName]);
}
