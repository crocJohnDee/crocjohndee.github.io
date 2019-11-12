import React from "react";
import "./sass/about/About.scss";
import me from "../images/me.png";
import { Footer } from "./Footer";

export const About = () => {
  setTimeout(() => window.scrollTo(0, 0));

  return (
    <>
      <section id="about">
        <div className="test"></div>
        <div className="me-container">

          <img src={me} alt="me" />
          <h2 className="header">About_Me</h2>
          <br />
          <p id="p1">Hi, I'm Johnny Barendrecht, Thank you so much for checking out my portfolio.</p>
          <br />
          <div id="p2">
            <p>For the last 2 years I have gained the necessary skills to start a career as a front-end, back-end || full-stack developer. For the last 2 years I have gained the necessary skills to start a career as a front-end, back-end || full-stack developer. For the last 2 years I have gained the necessary skills to start a career as a front-end, back-end || full-stack developer.     For the last 2 years I have gained the necessary skills to start  </p>
            <br />
            <p> a career as a front-end, back-end || full-stack developer.     For the last 2 years I have gained the necessary skills to start a career as a front-end, back-end || full-stack developer.     For the last 2 years I have gained the necessary skills to start a career as a front-end, back-end || full-stack developer.     For the last 2 years I have gained the necessary skills to start a career as a front-end, back-end || full-stack developer.</p>
            <br />
            <p>For the last 2 years I have gained the necessary skills to start a career as a front-end, back-end || full-stack developer.     For the last 2 years I have gained the necessary skills to start a career as a front-end, back-end || full-stack developer.     For the last 2 years I have gained the necessary skills to start a career as a front-end, back-end || full-stack developer.     For the last 2 years I have gained the necessary skills to start a career as a front-end, back-end || full-stack developer.</p>
            <br />
            <p>In October 2017 I decided to change my career from a call-center agent to a web-developer. <br />
              I started doing courses online andnafter about one year I started an intensive one-year developers course at the
              <a style={{ color: "orange" }}
                target="_blank"
                rel="noreferrer noopener"
                href="https://digitalcareerinstitute.org/">
                {" "}Digital Career Institute (DCI)</a></p>
            <br />
            <p>Not only am I a student, I am also the class Tutor. Every monday and friday I assist my peers with projects we currently work on inclass. <br />
              This is a paid position by DCI</p>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
};