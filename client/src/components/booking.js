import { deleteBooking, updateBooking } from "../services/BookingService";

const Booking = ({ booking, removeBooking, modifyBooking}) => {

  const onDelete = () => {
    deleteBooking(booking._id).then(() => removeBooking(booking._id))
  }

  // const onRadioChange = (e) => {
  //   const veryNewFormData = { ...formData };
  //   let value;
  //   if (e.target.value === "false") {
  //     value = false;
  //   } else if (e.target.value === "true") {
  //     value = true;
  //   }
  //   veryNewFormData[e.target.name] = value;
  //   console.log(formData)
  //   setFormData(veryNewFormData);
  // };

  const handleEdit = (e) => {
    let value;
    if (e.target.value === "false") {
      value = false;
    } else if (e.target.value === "true") {
      value = true;
    }
    booking.checkedIn = value
    updateBooking(booking._id, booking.checkedIn).then(() => modifyBooking(booking))
    
  }

  return (
    <>
      <li>
        <p>{booking.name}</p>
        <p>{booking.email}</p>
        <p>Checked in: {`${booking.checkedIn}`}</p>
        <div>
        <label htmlFor="checkin">Checked in?</label>
        <select defaultValue={booking.checkedIn} name="updateCheckIn" id="checkin">
          <option value="true" >Yes</option>
          <option value="false">No</option>
        </select>
        {/* <label htmlFor="checkinfalse">No</label>
        <input
          onChange={handleEdit}
          type="radio"
          id="checkinfalse"
          name="checkedIn"
          checked={booking.checkedIn === false}
          value="false"
        /> */}
        </div>
        <button onClick={handleEdit}>Update</button>
        <button onClick={onDelete}>🗑</button>
      </li>
    </>
  );
};

export default Booking;
