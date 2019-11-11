import React from "react";
import { Link } from "react-router-dom";
import "./sass/home/Home.scss";

export const Home = () => {
  return (
    <>
      <section id="home">
        <div className="background fadein">
          <div className="opacity">
          </div>
        </div>
        <div className="title">
          <div className="hr" />
          <br />
          <h1 id="header-text">
            <span id="x">JOHNNY BARENDRECHT</span>
          </h1>
          <br />
          <div className="hr bottom-hr" />
          <div id="finally">
            <h2 id="proffesion">
              Web Developer
            </h2>

            <div id="buttons">

              <Link to="about">
                <div className="btn">
                  <p>Portfolio</p>
                </div>
              </Link>

              <Link to="experience">
                <div title="Please" className="btn">
                  <p>Resume</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
