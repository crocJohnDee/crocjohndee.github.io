import React from "react";
import "./sass/cv/Cv.scss";
import resume from "../images/Johnny Barendrecht.png";
import pdf from "../images/Johnny Barendrecht.pdf";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Cv = () => {
  return (
    <>
      <Nav />

      <section id="skills">
        <br />
        <h2 className="header">Resume</h2>
        <div className="header-line"></div>
        <div id="download">
          <a href={pdf} download>
            Download
          </a>
        </div>
        <img src={resume} alt="" />

        <Footer />
      </section>
    </>
  );
};
