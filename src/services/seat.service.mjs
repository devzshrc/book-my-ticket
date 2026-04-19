import { findAllSeats } from "../repositories/seat.repository.mjs";

export async function getAllSeats() {
  return findAllSeats();
}
