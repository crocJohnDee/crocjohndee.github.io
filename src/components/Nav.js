import React from "react";
import "./sass/nav/Nav.scss";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <>
      <nav id="nav">
        <p>
          <Link to="/">
            <span className="bb">Home</span>
          </Link>
        </p>

        <p>
          <Link to="about">
            <span className="bb">About</span>
          </Link>
        </p>

        <p>
          <Link to="experience">
            <span className="bb">Experience</span>
          </Link>
        </p>

        <p>
          <Link to="skills">
            <span className="bb">Skills</span>
          </Link>
        </p>
      </nav>
    </>
  );
};
