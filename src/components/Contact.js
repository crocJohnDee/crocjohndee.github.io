import React from "react";
import "./sass/contact/Contact.scss";
import { Title } from "./Title";
import Map from "./Map";
console.dir(Map);

export const Contact = () => {
  return (
    <>
      <div className="flex">
        <div className="form-container">
          <p className="tag">&lt;body&gt;</p>
          <div id="title">
            <p
              style={{ marginLeft: "10px", marginTop: "40px" }}
              className="tag"
            >
              &lt;h2&gt;
            </p>
            <h2>
              <Title text="< Contact />" />
            </h2>
            <p style={{ marginLeft: "10px" }} className="tag">
              &lt;/h2&gt;
            </p>
          </div>
          <p style={{ fontSize: "12px", textAlign: "center" }}>
            If you have any questions, please don’t hesitate to contact using
            form below…
          </p>
          <form
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
            <input type="submit" value="Submit" id="submit" />
          </form>
        </div>
        <div id="app">
          <Map />
        </div>
      </div>
    </>
  );
};
