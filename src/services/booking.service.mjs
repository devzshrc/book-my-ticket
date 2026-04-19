import { pool } from "../config/db.mjs";
import {
  findAvailableSeatForUpdate,
  updateSeatBooking,
} from "../repositories/seat.repository.mjs";
import { createHttpError } from "../utils/http-error.mjs";

export async function bookSeat({ seatId, name }) {
  const connection = await pool.connect();

  try {
    await connection.query("BEGIN");

    const seatResult = await findAvailableSeatForUpdate(connection, seatId);

    if (seatResult.rowCount === 0) {
      throw createHttpError(409, "Seat already booked");
    }

    const updateResult = await updateSeatBooking(connection, seatId, name);
    await connection.query("COMMIT");

    return updateResult;
  } catch (error) {
    await connection.query("ROLLBACK");
    throw error;
  } finally {
    connection.release();
  }
}
