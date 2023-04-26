const BookingForm = () => {

    const onSubmit = () => {}

  return (
    <>
      <form onSubmit={onSubmit} id="booking-form">
        <h3>Add booking</h3>
        <div><input type="text" id="name" placeholder="name" value="name" required /></div>
        <div><input
          type="text"
          id="email"
          placeholder="email"
          value="email"
          required
        /></div>
        <p>Checked in?</p>
        <label for="checkintrue">Yes</label>
        <input type="radio" id="checkintrue" name="checkin" value="true" />
        <label for="checkinfalse">No</label>
        <input type="radio" id="checkinfalse" name="checkin" value="false" />
        <div><input type="submit" value="Save" id="save" /></div>
      </form>
    </>
  );
};

export default BookingForm;
