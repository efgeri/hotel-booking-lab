import "./App.css";
import BookingList from "./components/bookingList";
import BookingForm from "./components/bookingForm";
import { getBookings } from "./services/BookingService";
import { useState, useEffect } from "react";

function App() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings().then((allBookings) => setBookings(allBookings));
  }, []);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  const removeBooking = (id) => {
    const updatedBookings = bookings.filter((booking) => booking._id !== id);
    setBookings(updatedBookings);
  };

  const modifyBooking = (updatedBooking) => {
    const copyBookings = [...bookings]
    const index = bookings.findIndex(booking => booking._id === updatedBooking._id)
    copyBookings[index] = updatedBooking
    console.log(copyBookings)
    setBookings(copyBookings)
  }

  return (
    <>
      <h1>Aneeqa & Geri's hotel booking SYSTEM</h1>
      <div className="App">
        <BookingList bookings={bookings} removeBooking={removeBooking} modifyBooking={modifyBooking} />
        <BookingForm addBooking={addBooking} />
      </div>
    </>
  );
}

export default App;
