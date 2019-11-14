import React from "react";
import "./sass/portfolio/Portfolio.scss";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Portfolio = () => {
  setTimeout(() => {
    const gallery = document.querySelectorAll(".work");
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    let ms = 1000;
    for (let i = 0; i < gallery.length; i++) {
      sleep(ms).then(() => gallery[i].classList.add("show"));
      ms += 100;
    }
  });

  return (
    <>
      <Nav />
      <section id="portfolio">
        <br />
        <h2 className="header">Portfolio</h2>
        <div className="header-line"></div>

        <br />

        <Footer />
      </section>
    </>
  );
};
