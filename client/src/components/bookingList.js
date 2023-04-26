import Booking from "./booking";
import styled from "styled-components";

const BookingList = ({ bookings }) => {
  const allBooking = bookings.map((booking) => {
    return <Booking booking={booking} key={booking._id} />;
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
