import Booking from "./booking";
import styled from "styled-components";

const BookingList = ({ bookings, removeBooking, modifyBooking }) => {
  const allBooking = bookings.map((booking) => {
    return <Booking removeBooking={removeBooking} booking={booking} key={booking._id} modifyBooking={modifyBooking} />;
  });

  return (
    <section>
      <StyledList>{allBooking}</StyledList>
    </section>
  );
};

const StyledList = styled.ul`
    list-style: none;
`;

export default BookingList;
