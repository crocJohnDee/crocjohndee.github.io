import React from "react";
import "./sass/skills/Skills.scss";
import uuid from "uuid/v4";
import { Title } from "./Title";
const dutch = require("../images/dutch.png");
const english = require("../images/english.png");
const german = require("../images/german.png"),
  jQuery = require("../images/skills/jquery.png"),
  html = require("../images/skills/html.png"),
  css = require("../images/skills/css.png"),
  javascript = require("../images/skills/javascript.png"),
  sass = require("../images/skills/sass.png"),
  bootstrap = require("../images/skills/bootstrap.png"),
  react = require("../images/skills/react.png"),
  nodejs = require("../images/skills/nodejs.png"),
  php = require("../images/skills/php.png"),
  mongodb = require("../images/skills/mongodb.png"),
  git = require("../images/skills/git.png"),
  linux = require("../images/skills/linux.png"),
  terminal = require("../images/skills/terminal.png"),
  npm = require("../images/skills/npm.png"),
  github = require("../images/skills/github.png"),
  mongoose = require("../images/skills/mongoose.png"),
  ejs = require("../images/skills/ejs.png"),
  express = require("../images/skills/express.png"),
  es6 = require("../images/skills/es6.png"),
  babel = require("../images/skills/babel.png");





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
        <img src={icon} alt="" />
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

        <div id="skill-header">
          <div id="header-opacity">

            <h2>
              <Title text="SkillS" />
            </h2>
          </div>
        </div>

        <div className="my-container">

          <h3>Languages</h3>
          <br />
          <div className="language-container">
            <div className="language">
              <p>
                <img src={dutch} alt="dutch" />
              </p>
              <p>Native</p>
            </div>
            <div className="language">
              <p>
                <img src={english} alt="english" />
              </p>
              <p>Fluent</p>
            </div>
            <div className="language">
              <p>
                <img src={german} alt="german" />
              </p>
              <p>Good</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="my-container">
          <h3>The standards</h3>
          <div className="container">
            <ItemContainer icon={html} name="HTML" confidence={5} />
            <ItemContainer icon={css} name="CSS" confidence={5} />
            <ItemContainer icon={javascript} name="JavaScript" confidence={4} />
          </div>
        </div>
        <hr />
        <div className="my-container">
          <h3>Liberaries</h3>
          <br />
          <div className="container">
            <ItemContainer icon={sass} name="SASS" confidence={3} />
            <ItemContainer icon={jQuery} name="jQuery" confidence={3} />
            <ItemContainer
              icon={bootstrap}
              name="Bootstrap"
              confidence={4}
            />
            <ItemContainer icon={react} name="React" confidence={3} />
          </div>
        </div>
        <hr />
        <div className="my-container">
          <h3>Back-End</h3>
          <br />
          <div className="container">
            <ItemContainer icon={nodejs} name="NodeJs" confidence={2} />
            <ItemContainer icon={php} name="PHP" confidence={2} />
            <ItemContainer icon={mongodb} name="MongoDB" confidence={3} />
            <ItemContainer icon={mongoose} name="Mongoose" confidence={3} />
            <ItemContainer
              icon={express}
              name="ExpressJS"
              confidence={3}
            />
          </div>
        </div>
        <hr />
        <div className="my-container">
          <h3>Nice to Haves</h3>
          <br />
          <div className="container">
            <ItemContainer icon={git} name="Git" confidence={3} />
            <ItemContainer icon={linux} name="Linux" confidence={4} />
            <ItemContainer
              icon={terminal}
              name="Terminal"
              confidence={4}
            />
            <ItemContainer icon={npm} name="NPM" confidence={4} />
            <ItemContainer icon={github} name="Github" confidence={4} />
            <ItemContainer icon={ejs} name="EJS" confidence={4} />
            <ItemContainer icon={es6} name="ES6" confidence={4} />
            <ItemContainer icon={babel} name="Babel" confidence={2} />
          </div>
        </div>
      </section>
    </>
  );
};
