import React from "react";
import { Link } from "react-router-dom";
import "./sass/home/Home.scss";
import bg from "../images/web.png";
import spider from "../images/spider-hanging.png";
import uuid from "uuid/v4";
const bounce = e => {
  e.persist();
  e.target.classList.add("bounceH");
  e.target.addEventListener("animationend", () =>
    e.target.classList.remove("bounceH")
  );
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
    return <span key={uuid()}>&nbsp;&nbsp;&nbsp;</span>;
  } else {
    return (
      <span
        key={uuid()}
        onMouseOver={bounce}
        className="letter first-animation"
      >
        {x}
      </span>
    );
  }
});

let str =
  "A highly motivated web-developer looking to chang my passion into a career";
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
    // let show = document.querySelector(".what-am-i2");
    // show.classList.remove("hide");
    let spider1 = document.querySelector("#spider-hanging");
    spider1.classList.add("drop");
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach(x => x.classList.add("show"));
  }, 500);

  const shake = e => {
    e.persist();
    e.target.classList.add("shake");
    e.target.addEventListener("animationend", () =>
      e.target.classList.remove("shake")
    );
  };

  return (
    <>
      <section id="home" style={{ backgroundImage: `url(${bg})` }}>
        <p className="tag" id="first-tag">
          &lt;body&gt;
        </p>

        <img
          id="spider-hanging"
          src={spider}
          alt="spider"
          title="web-developer"
          onMouseOverCapture={shake}
        />

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
        {/*++++++++++++++++++++++++++*/}
        <div id="tag-last">
          <p className="tag">&lt;/body&gt;</p>
          <p className="tag" id="last-tag">
            &lt;/html&gt;
          </p>
        </div>
      </section>
    </>
  );
};
