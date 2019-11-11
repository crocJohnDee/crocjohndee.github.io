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
          <hr className="top-hr" />
          <br />
          <h1 id="header-text">
            JOHNNY BARENDRECHT
          </h1>
          <br />
          <hr className="bottom-hr" />
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
