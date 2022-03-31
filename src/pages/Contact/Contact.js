import React from "react";
import email from "../../images/email.png";
import phone from "../../images/call.png";
import location from "../../images/location.png";
import linkdin from "../../images/linkedin.png";
import contactUs from "../../images/Contact us-amico.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="contactheading">Contact</h1>
      <div className="row contactInfo">
        <div className="col-sm-12 col-md-4 col-lg-3">
          <img style={{ width: "50px" }} src={email} alt="" />
          <h5>sajibhossensa90@gmail.com</h5>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3">
          <img style={{ width: "50px" }} src={phone} alt="" />
          <h4>+8801715676974</h4>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3">
          <img style={{ width: "50px" }} src={location} alt="" />
          <h5>Dhaka,Bangladesh</h5>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3">
          <img style={{ width: "50px" }} src={linkdin} alt="" />
          <h5>linkdin</h5>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
          <form className="form">
            <input
              type="text"
              className="w-75 p-2 m-2"
              name=""
              id=""
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              name=""
              className="w-75 p-2 m-2"
              id=""
              placeholder="Enter Your email"
            />
            <textarea
              name=""
              id=""
              placeholder="your message"
              className="w-75 p-2 m-2"
            ></textarea>
            <input
              className="w-75 p-2 m-2 button"
              type="button"
              value="Submit"
            />
          </form>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img style={{ width: "100%" }} src={contactUs} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
