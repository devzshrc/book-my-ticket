import { getAllSeats } from "../services/seat.service.mjs";

export async function getSeats(req, res) {
  const seats = await getAllSeats();
  res.send(seats);
}
