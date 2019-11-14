import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import available from "../images/available.png";
import "./sass/home/Home.scss";
export const Home = () => {
  return (
    <>
      <section id="home">
        <Nav />
        <div className="background fadein">
          <div className="opacity"></div>
        </div>
        <img id="available" src={`${available}`} alt="" />

        <div className="title">
          <div className="hr" />
          <br />
          <h1 id="header-text">
            <span id="x">JOHNNY BARENDRECHT</span>
          </h1>
          <br />
          <div className="hr bottom-hr" />
          <div id="finally">
            <h2 id="proffesion">Web Developer</h2>

            <div id="buttons">
              <Link to="portfolio">
                <div className="btn">
                  <p>Portfolio</p>
                </div>
              </Link>

              <Link to="cv">
                <div className="btn">
                  <p>CV</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
