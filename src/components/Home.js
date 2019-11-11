import React from "react";
import { Link } from "react-router-dom";
import "./sass/home/Home.scss";
import uuid from "uuid/v4";
const bounce = e => {
  e.persist();
  e.target.classList.add("bounceH");
  setTimeout(() => e.target.classList.remove("bounceH"), 800);


};
const hl = e => {
  e.persist();
  e.target.classList.add("hl");
  setTimeout(() => e.target.classList.remove("hl"), 600);
};

const hi = "Hi,-I am Johnny.";
const hiArr = hi.split("");
const hiArrf = hiArr.map(x => {
  if (x === "-") {
    return (
      <span key={uuid()}>
        {" "}
        <br />
      </span>
    );
  } else if (x === " ") {
    return <span key={uuid()}>&nbsp;</span>;
  } else {
    return (
      <span
        key={uuid()}
        onMouseOver={bounce}
        className="jump-target first-animation letter fi"
      >
        {x}
      </span>
    );
  }
});

let str =
  "A highly motivated and curious web-developer looking to change his passion into a career";
let arr = str.split("");
let newArr = arr.map(x => {
  return x !== " " ? (
    <span key={uuid()} onMouseOver={hl}>
      {x}
    </span>
  ) : (
      " "
    );
});

export const Home = () => {
  setTimeout(() => {

    let buttons = document.querySelectorAll(".btn");
    buttons.forEach(x => x.classList.add("show"));

  }, 500);

  setTimeout(() => {
    let intro = document.querySelectorAll(".jump-target");
    intro.forEach(x => x.classList.remove("first-animation"));
  }, 1800);

  return (
    <>
      <section id="home">
        <div id="title">{hiArrf}</div>
        {/* ++++++++++
        ++++++++++++++++++++
        ++++++++++++++++++++++++++
         */}
        <p id="intro">
          <span id="what-am-i2">{newArr}</span>
        </p>
        {/* +++++++++++++++++++
        ++++++++++++++++++++
        +++++++++++++++
         */}
        {/*+++++++++Buttons+++++++++*/}
        <div id="buttons">
          <Link to="about">
            <div className="btn btnOne">
              <span>About</span>
            </div>
          </Link>
          <Link to="contact">
            <div title="Please" className="btn btnTwo">
              <span>Hire me</span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};
