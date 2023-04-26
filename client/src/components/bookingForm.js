import { postBooking } from "../services/BookingService";
import { useState } from "react";

const BookingForm = ({ addBooking }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkedIn: false,
  });

  const onChange = (e) => {
    const newFormData = { ...formData };
    console.log(newFormData);
    console.log(formData);
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  const onRadioChange = (e) => {
    const veryNewFormData = { ...formData };
    let value;
    if (e.target.value === "false") {
      value = false;
    } else if (e.target.value === "true") {
      value = true;
    }
    veryNewFormData[e.target.name] = value;
    console.log(formData)
    setFormData(veryNewFormData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    postBooking(formData).then((data) => {
      addBooking(data);
      setFormData({
        name: "",
        email: "",
        checkedIn: false,
      });
    });
  };

  return (
    <>
      <form onSubmit={onSubmit} id="booking-form">
        <h3>Add booking</h3>
        <div>
          <input
            onChange={onChange}
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={formData.name}
            required
          />
        </div>
        <div>
          <input
            onChange={onChange}
            type="text"
            id="email"
            name="email"
            placeholder="email"
            value={formData.email}
            required
          />
        </div>
        <p>Checked in?</p>
        <label htmlFor="checkintrue">Yes</label>
        <input
          onChange={onRadioChange}
          type="radio"
          id="checkintrue"
          name="checkedIn"
          checked={formData.checkedIn === true}
          value="true"
        />
        <label htmlFor="checkinfalse">No</label>
        <input
          onChange={onRadioChange}
          type="radio"
          id="checkinfalse"
          name="checkedIn"
          checked={formData.checkedIn === false}
          value="false"
        />
        <div>
          <input type="submit" value="DETONATE" id="save" />
        </div>
      </form>
    </>
  );
};

export default BookingForm;
