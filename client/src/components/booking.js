import { deleteBooking, updateBooking } from "../services/BookingService";

const Booking = ({ booking, removeBooking, modifyBooking }) => {
  const onDelete = () => {
    deleteBooking(booking._id).then(() => removeBooking(booking._id));
  };

  const handleEdit = (e) => {
    let value;
    if (e.target.value === "false") {
      value = false;
    } else if (e.target.value === "true") {
      value = true;
    }
    booking.checkedIn = value;
    const payload = { checkedIn: value };
    updateBooking(booking._id, payload).then(() => modifyBooking(booking));
  };

  return (
    <>
      <li>
        <p>{booking.name}</p>
        <p>{booking.email}</p>
        <p>Checked in: {`${booking.checkedIn}`}</p>
        <div>
          <label htmlFor="checkintrue">Yes</label>
          <input
            onChange={handleEdit}
            type="radio"
            id="checkintrue"
            name={`checkedIn${booking._id}`}
            checked={booking.checkedIn === true}
            value="true"
          />
          <label htmlFor="checkinfalse">No</label>
          <input
            onChange={handleEdit}
            type="radio"
            id="checkinfalse"
            name={`checkedIn${booking._id}`}
            checked={booking.checkedIn === false}
            value="false"
          />
        </div>
        <button onClick={handleEdit}>Update</button>
        <button onClick={onDelete}>🗑</button>
      </li>
    </>
  );
};

export default Booking;
