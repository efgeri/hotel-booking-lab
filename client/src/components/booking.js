const Booking = ({ booking }) => {
    console.log(booking.checkedIn)
  return (
    <>
      <li>
        <p>{booking.name}</p>
        <p>{booking.email}</p>
        <p>Checked in: {`${booking.checkedIn}`}</p>
      </li>
    </>
  );
};

export default Booking;
