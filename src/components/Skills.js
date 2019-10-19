import React from "react";
import "./sass/skills/Skills.scss";
import uuid from "uuid/v4";
import { Title } from "./Title";
import { dutch } from "../images/dutch.png";
import { english } from "../images/english.png";
import { german } from "../images/german.png";

// src/images/dutch.png
const ItemContainer = ({ confidence, icon, name }) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    i >= confidence
      ? stars.push(<i key={uuid()} className="far fa-star"></i>)
      : stars.push(<i key={uuid()} className="fas fa-star"></i>);
  }
  return (
    <>
      <div className="icon-container">
        <i className={icon}></i>
        <span>{name}</span>
        <div className="confidence">{stars}</div>
      </div>
    </>
  );
};

export const Skills = () => {
  return (
    <>
      <section id="skills">
        <h2>
          <Title text="< Skills />" />
        </h2>
        <h3>Languages</h3>
        <div className="language-container">
          <div className="language">
            <p>
              <img src={dutch} alt="dutch" />
            </p>
            <p>Dutch</p>
          </div>
          <div className="language">
            <p>
              <img src={english} alt="english" />
            </p>
            <p>English</p>
          </div>
          <div className="language">
            <p>
              <img src={german} alt="german" />
            </p>
            <p>German</p>
          </div>
        </div>
        <h4>Skills I obtained over the last 2 years.</h4>
        <p>The stars represend my confidence level, relatively</p>

        <div className="icons">
          <ItemContainer icon="fab fa-html5" name="HTML" confidence={5} />
          <ItemContainer icon="fab fa-css3-alt" name="CSS" confidence={5} />
          <ItemContainer icon="fab fa-js" name="JavaScript" confidence={4} />
          <ItemContainer icon="fab fa-sass" name="SASS" confidence={3} />
          <ItemContainer
            icon="fab fa-bootstrap"
            name="Bootstrap"
            confidence={4}
          />
          <ItemContainer icon="fab fa-node-js" name="NodeJs" confidence={2} />
          <ItemContainer icon="fab fa-git" name="Git" confidence={3} />
          <ItemContainer icon="fab fa-react" name="React" confidence={3} />
          <ItemContainer icon="fab fa-linux" name="Linux" confidence={4} />
          <ItemContainer
            icon="fas fa-terminal"
            name="Terminal"
            confidence={4}
          />
          <ItemContainer icon="fab fa-php" name="PHP" confidence={2} />
          <ItemContainer icon="fab fa-mdb" name="MongoDB" confidence={1} />
          <ItemContainer
            icon="fas fa-database"
            name="sql-Database"
            confidence={2}
          />
          <ItemContainer icon="fab fa-npm" name="NPM" confidence={4} />
          <ItemContainer icon="fab fa-github" name="Github" confidence={4} />
        </div>
      </section>
    </>
  );
};
