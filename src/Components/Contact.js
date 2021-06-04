import React from "react";
import emailjs from "emailjs-com";
require("dotenv").config();

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contactContainer" id="contact">
      <h1> Contact Me </h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" name="name" />
        <br />
        <input placeholder="Email" name="email" />
        <br />
        <textarea placeholder="Comment" name="message" />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
