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
    console.log(gallery);

    setTimeout(() => {
      sleep(200).then(() => gallery[0].classList.add("show"));
      sleep(300).then(() => gallery[1].classList.add("show"));
      sleep(400).then(() => gallery[2].classList.add("show"));
      sleep(500).then(() => gallery[3].classList.add("show"));
      sleep(600).then(() => gallery[4].classList.add("show"));
      sleep(700).then(() => gallery[5].classList.add("show"));
      sleep(800).then(() => gallery[6].classList.add("show"));
      sleep(900).then(() => gallery[7].classList.add("show"));
      sleep(1000).then(() => gallery[8].classList.add("show"));
    }, 1000);
  });


  return (
    <>
      <section id="experience">

        <br />
        <h2 className="header">Portfolio</h2>
        <div id="header-line"></div>

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
