import React from "react";
import "./sass/about/About.scss";
import me from "../images/me2.jpg";
import { Footer } from "./Footer";

export const About = () => {
  return (
    <>
      <section id="about">


        <div style={{ paddingBottom: "100px" }}>

          <div className="me-container">
            <img src={me} alt="me" />

            <h2>About_Me</h2>
            <p id="p1">
              <br />
              Hi,
              I'm Johnny Barendrecht, Thank you so much for checking out my portfolio.

            <br /><br />

              For the last 2 years I have gained the necessary skills to start
              a career as a front-end, back-end || full-stack developer.
          </p>

            <br />

            <div id="p2">

              <p>
                In October 2017 I decided to change my career from a call-center
            agent to a web-developer. <br />I started doing courses online and
                                          after about one year I started an intensive one-year developers
            course at the{" "}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://digitalcareerinstitute.org/"
                >
                  Digital Career Institute (DCI)
            </a>
                . <br />
              </p>
              <br />
              <p>
                Not only am I a student, I am also the class Tutor. Every monday and
                friday I assist my peers with projects we currently work on in
            class. <br />
                This is a paid position by{" "}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://digitalcareerinstitute.org/"
                >
                  DCI
            </a>{" "}
              </p>

            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
