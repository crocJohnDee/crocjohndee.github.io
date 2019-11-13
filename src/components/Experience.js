import React from "react";
import "./sass/experience/Experience.scss";
import { Footer } from "./Footer";
import armin from '../images/armin.jpg';
import bill from "../images/bill-gates.jpg";
import brian from "../images/brian.jpg";
import dundee from "../images/dundee.jpeg";
import neil from "../images/neil.jpg";
import elon from "../images/elon.jpg";


export const Experience = () => {
  setTimeout(() => {
    const gallery = document.querySelectorAll(".work");
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    let ms = 1000
    for (let i = 0; i < gallery.length; i++) {
      sleep(ms).then(() => gallery[i].classList.add("show"));
      ms += 100;
    }
  });


  return (
    <>
      <section id="experience">
        <br />
        <h2 className="header">Portfolio</h2>
        <div className="header-line"></div>

        <br />

        <div id="work-gallery">

          <div className="work">
            <img src={armin} alt="" />
          </div>

          <div className="work">
            <img src={neil} alt="" />
          </div>

          <div className="work">
            <img src={dundee} alt="" />
          </div>

          <div className="work">
            <img src={bill} alt="" />
          </div>

          <div className="work">
            <img src={brian} alt="" />
          </div>

          <div className="work">
            <img src={elon} alt="" />
          </div>

          <div className="work">
            <img src={neil} alt="" />
          </div>

          <div className="work">
            <img src={armin} alt="" />
          </div>

          <div className="work">
            <img src={bill} alt="" />
          </div>

        </div>


        <Footer />
      </section>

    </>
  );
};
