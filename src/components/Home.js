import React from "react";
import { Link } from "react-router-dom";
import "./sass/home/Home.scss";
import Typed from "typed.js";
import bg from "../images/web.png";
import spider from "../images/spider-hanging.png";
import uuid from "uuid/v4";

const here = document.URL === "http://localhost:3000/";

let str =
  "A highly motivated web-developer looking to kickstart a career in Berlin.";
let arr = str.split("");

const hl = e => {
  e.persist();
  e.target.classList.add("hl");
  setTimeout(() => e.target.classList.remove("hl"), 600);
};
let newArr = arr
  .map(x => (x !== " " ? `<span class="test2">${x}</span>` : " "))
  .join("");

let newArr2 = arr.map(x =>
  x !== " " ? (
    <span key={uuid()} onMouseOver={hl}>
      {x}
    </span>
  ) : (
    " "
  )
);
// let typed = document.querySelectorAll(".t");
// typed.forEach(x => {
//   x.addEventListener("mouseover", () => {
//     x.classList.add("hl");
//     setTimeout(() => x.classList.remove("hl"), 600);
//   });
// });
// let show = document.querySelector("#what-am-i");
// let hide = document.querySelector(".what-am-i2");
// hide.classList.add("hide");
// show.classList.remove("hide");

const type = () => {
  setTimeout(() => {
    new Typed("#what-am-i", {
      strings: [newArr],
      typeSpeed: 10,
      showCursor: true,
      startDelay: 400,
      onComplete: function() {
        let cursor = document.querySelector(".typed-cursor");
        setTimeout(function() {
          cursor.style.display = "none";
        }, 200);

        let hide = document.querySelector("#what-am-i2");
        let show = document.querySelector("#what-am-i");
        hide.classList.remove("hide");
        show.classList.add("hide");
      }
    });
  }, 1800);
};

if (here) {
  setTimeout(() => {
    document.querySelector("#what-am-i2").classList.add("hide");
  });

  type();
}
setTimeout(() => {
  const letters = document.querySelectorAll(".letter");
  letters.forEach(x => {
    x.classList.add("first-animation");
    setTimeout(() => x.classList.remove("first-animation"), 1800);
  });
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
  const bounce = e => {
    e.persist();
    e.target.classList.add("bounceH");
    e.target.addEventListener("animationend", () =>
      e.target.classList.remove("bounceH")
    );
  };
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

        <div id="title">
          <span onMouseOver={bounce} className="letter">
            H
          </span>
          <span onMouseOver={bounce} className="letter">
            i
          </span>
          <span onMouseOver={bounce} className="letter">
            ,
          </span>
          <br />
          <span onMouseOver={bounce} className="letter">
            I
          </span>
          &nbsp;&nbsp;&nbsp;
          <span onMouseOver={bounce} className="letter">
            a
          </span>
          <span onMouseOver={bounce} className="letter">
            m
          </span>
          &nbsp;&nbsp;&nbsp;
          <span onMouseOver={bounce} className="letter">
            J
          </span>
          <span onMouseOver={bounce} className="letter">
            o
          </span>
          <span onMouseOver={bounce} className="letter">
            h
          </span>
          <span onMouseOver={bounce} className="letter">
            n
          </span>
          <span onMouseOver={bounce} className="letter">
            n
          </span>
          <span onMouseOver={bounce} className="letter">
            y
          </span>
          <span onMouseOver={bounce} className="letter">
            .
          </span>
        </div>
        {/* ++++++++++
        ++++++++++++++++++++
        ++++++++++++++++++++++++++
         */}
        <p id="intro">
          <span id="what-am-i"></span>
          <span id="what-am-i2">{newArr2}</span>
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
