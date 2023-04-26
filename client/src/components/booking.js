const Booking = ({ booking }) => {

  onDelete = () => {
    
  }

  return (
    <>
      <li>
        <p>{booking.name}</p>
        <p>{booking.email}</p>
        <p>Checked in: {`${booking.checkedIn}`}</p>
        <button onDelete={onDelete}>🗑</button>
      </li>
    </>
  );
};

export default Booking;
