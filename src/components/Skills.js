import React from "react";
import "./sass/skills/Skills.scss";
import resume from "../images/CV Johnny Barendrecht-1.png";
import pdf from "../images/Johnny Barendrecht.pdf";
import { Footer } from "./Footer";

export const Skills = () => {
  return (
    <>
      <section id="skills">
        <br />
        <h2 className="header">Resume</h2>
        <div className="header-line"></div>
        <div id="download">
          {" "}
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
