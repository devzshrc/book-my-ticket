import { bookSeat } from "../services/booking.service.mjs";

export async function updateSeatBookingById(req, res) {
  const { id, name } = req.params;
  const result = await bookSeat({ seatId: id, name });
  res.send(result);
}
