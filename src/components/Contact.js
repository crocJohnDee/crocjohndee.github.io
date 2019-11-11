import React from "react";
import "./sass/contact/Contact.scss";
import { Title } from "./Title";
import Map from "./Map";
console.dir(Map);

export const Contact = () => {
  return (
    <>
      <section id="contact">

        <div id="contact-header">
          <div className="detail-container">
            <ul style={{
              fontSize: "12px",
              color: "white",
              padding: "7px",
              fontFamily: "'Source Code Pro', monospace",
              lineHeight: "13px"
            }}>
              <li>Johnny Barendrecht</li>
              <li><i className="fas fa-mobile-alt"></i>: +49 167 4072 7153</li>
              <li><i className="fas fa-at"></i>: johnny.barendrecht@gmail.com</li>
              <li><i className="fas fa-bed"></i>: Neukölln Berlin</li>
            </ul>
          </div>
          <h2>
            <Title text="Contact" />
          </h2>
        </div>

        <p style={{
          fontSize: "12px",
          textAlign: "center",
          color: "white",
          backgroundColor: "#000000c2",
          padding: "7px",
          fontFamily: "'Source Code Pro', monospace",
        }}>
          If I have sparked your curiousity, I would be very happy to hear from you. <br />
          Please fill in the form below or contact me by phone, email or any of the social platforms I have shared. <br />
          <br />
          Hopefully, bis bald! <br /><br />
          Viele Grüße, <br />
          Johnny Barendrecht.
          </p>

        <div className="form-container">

          <form autoComplete="off"
            id="fs-frm"
            name="simple-contact-form"
            acceptCharset="utf-8"
            action="https://formspree.io/johnny.barendrecht@gmail.com"
            method="post"
          >
            <fieldset id="fs-frm-inputs">
              <label htmlFor="name"></label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required=""
              />
              <label htmlFor="email-address"></label>
              <input
                type="email"
                name="email"
                id="email-address"
                placeholder="Email"
                required=""
              />
              <label htmlFor="email-address"></label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="subject"
                required=""
              />
              <label htmlFor="message"></label>
              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Message"
                required=""
              ></textarea>
              <input
                type="hidden"
                name="_subject"
                id="email-subject"
                value="Contact Form Submission"
              />
            </fieldset>
            <input type="submit" value="Send" id="submit" />
          </form>
        </div>
        <p style={{ fontSize: "16px", textAlign: "center" }}>Look! I can import open-soured maps!</p>
        <div id="app">
          <Map />
        </div>
        <p style={{ fontSize: "16px", textAlign: "center" }}>And so much more!</p>
      </section>
    </>
  );
};
