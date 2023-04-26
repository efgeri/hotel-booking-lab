
import './App.css';
import BookingList from './components/bookingList';
import BookingForm from './components/bookingForm';
import { getBookings } from './services/BookingService';
import { useState, useEffect } from 'react';

function App() {

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    getBookings().then((allBookings) => setBookings(allBookings))
  }, [])

  const addBooking = (booking) => {
    setBookings([...bookings, booking])
  }

  return (
    <>
      <h1>Aneeqa's hotel booking SYSTEM</h1>
    <div className="App">
      <BookingList bookings={bookings}/>
      <BookingForm addBooking={addBooking}/>
    </div>
    </>
  );
}

export default App;
