import React from "react";
import "./sass/nav/Nav.scss";
import { Link } from "react-router-dom";
import home from "../icons/home.png";
import about from "../icons/user.png";
import skills from "../icons/note.png";
import experience from "../icons/briefcase.png";
import contact from "../icons/satellite.png";
export const Nav = () => {
  return (
    <>
      <nav id="nav">
        <div id="logo-container">
          <Link style={{ textDecoration: "none" }} to="/">
            <p id="logo">J</p>
          </Link>
          <p>Johnny</p>
        </div>

        <div id="nav-menu">
          <p>
            <Link to="/">
              <img src={home} alt="ewf" title="Home" />
            </Link>
            <span className="bb">Home</span>
          </p>
          <p>
            <Link to="about">
              <img src={about} alt="ewf" title="About me" />
            </Link>
            <span className="bb">About</span>
          </p>
          <p>
            <Link to="experience">
              <img src={experience} alt="ewf" title="Experience" />
            </Link>
            <span className="bb">Experience</span>
          </p>
          <p>
            <Link to="skills">
              <img src={skills} alt="ewf" title="Skills" />
            </Link>
            <span className="bb">Skills</span>
          </p>
          <p>
            <Link to="contact">
              <img src={contact} alt="ewf" title="Want to hire me?" />
            </Link>
            <span className="bb">Contact</span>
          </p>
        </div>

        <div id="socials">
          <p>
            <a
              href="https://www.linkedin.com/in/johnny-barendrecht/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </p>
          <p>
            <a
              href="https://github.com/crocJohnDee"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-github"></i>
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/johnnybarendrecht"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </p>
          <p>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://codepen.io/JohnnyBar"
            >
              <i className="fab fa-codepen" />
            </a>
          </p>
        </div>
      </nav>
    </>
  );
};
