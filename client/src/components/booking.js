import { deleteBooking } from "../services/BookingService";

const Booking = ({ booking, removeBooking }) => {

  const onDelete = () => {
    deleteBooking(booking._id).then(() => removeBooking(booking._id))
  }

  return (
    <>
      <li>
        <p>{booking.name}</p>
        <p>{booking.email}</p>
        <p>Checked in: {`${booking.checkedIn}`}</p>
        <button onClick={onDelete}>🗑</button>
      </li>
    </>
  );
};

export default Booking;
