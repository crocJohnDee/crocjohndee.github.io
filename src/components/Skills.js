import React from "react";
import "./sass/skills/Skills.scss";
import uuid from "uuid/v4";
import { Title } from "./Title";

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
