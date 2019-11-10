import React from "react";
import "./sass/about/About.scss";
import me from "../images/me2.jpg";
import { Link } from "react-router-dom";
import { Title } from "./Title";
import { readMore } from "./readmore";
const armin = require("../images/armin.jpg");
const elon = require("../images/elon.jpg");
const neil = require("../images/neil.jpg");
const brian = require("../images/brian.jpg");
const dundee = require("../images/dundee.jpeg");
const bill = require("../images/bill-gates.jpg");

export const About = () => {
  return (
    <>
      <section id="about">
        <div id="about-header">

          <h2>
            <Title text="About_Me" />
          </h2>

          <div id="profile-pic">
            <img src={me} alt="me" />
          </div>
        </div>

        <div className="me-container">
          <p>
            <span className="first-letter">H</span> i,
            I'm Johnny Barendrecht., and thank you so much for checking out my portfolio.
          </p>

          <br />
          <p>
            For the last 2 years I have obtained the necessary skills to start
            a career as a front-end developer.
          </p> <br />
          <p>
            In Oktober 2017 I decided to change my career from a call-center
            agent to a web-developer. <br />I started doing courses online and
            after about one year I started a intensive one-year developers
            course at the{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://digitalcareerinstitute.org/"
            >
              Digital Career Institute (DCI)
            </a>
            . <br />
          </p>
          <br />
          <p>
            Not only am I a student, I am also the class Tutor. Every monday and
            friday I assist my peers with projects we currently work on in
            class. <br />
            This is a paid position by{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://digitalcareerinstitute.org/"
            >
              DCI
            </a>{" "}
          </p>
          <br />
          <span className="self">
            <p>
              I am born and raised in the Netherands <br />
              When I was 16 years old, I worked for a{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.google.com/search?q=kassenbouw&sxsrf=ACYBGNRFiyvjiGdOQXKODHzQQI2YiyqUoA:1570628652419&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiU4prXp4_lAhWHEVAKHUzdAlYQ_AUIEigB&biw=1443&bih=743"
              >
                greenhouse construction company
              </a>
              . We mainly worked in other countries and from a pretty young age
              I was travelling all over the world for my work.
            </p>
            <br />
            <p>
              This was offcourse amazing, but when I turned 18, I thpught it was
              time for me to travel by myself and leave me amazing contruction
              job. <br />I did that for a few years. Most of my time I spend in
              Australia where I lived for about 3 years. One of the best
              experiences I had here, was working on a{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.google.com/search?q=cattle+station+nt&sxsrf=ACYBGNT0LPxSbtHk7E8nkLL6I49G9iR5KA:1570629426117&source=lnms&tbm=isch&sa=X&ved=0ahUKEwid0ZHIqo_lAhVCbFAKHVpvB6MQ_AUIEigB&biw=1443&bih=743"
              >
                cattle station
              </a>{" "}
              in the outback of Australie, I can talk about this for hours!
            </p>
            <br />
            <p>
              <span className="first-letter">5</span> years ago I moved to
              Berlin where my son was born. <br />
              Since I did not had any former education, I did what was easiest
              thing for me to do. <br />
              Working in call centers for the Dutch market. It was fun at first,
              but after a few years I felt there was nothing new to learn and
              there were no challenges left, and I quit.
            </p>
            <br />
            <p>
              I really had no idea what I wanted to do. I knew that I wanted to
              do something that would always keep challenging me and offers a
              great career path. The last became extra important to me when my
              son was born. <br />A few months after I quit my last call center
              job, I stumbeld upon a video from a guy who explained how he
              became a web developer. I was very ispired by his story and
              started to watch more videos about web developmont, at first. I
              alway assumed that to be a programmer you would need a very high
              degree. But watching these people speak, I quickly learned this
              was not the case and I was inspired to become a developer myself.
            </p>
            <br />
            <p>
              You can read more about how I skilled myself in the last 2 years,
              on my experience <Link to="Experience">page.</Link> <br />
              I just like to add that I am a very positive person, I had over a
              decade of fun travelling aound the world and I'm very lucky to
              have a healthy and amazing young child. I think people around me
              often recognise my natural optisim. <br />I can say though, That I
              am way more excited about my career and my future in tech than
              anything I ever did{" "}
              <span
                className="side-note"
                title="Besides from becoming a father offcourse"
              >
                before
              </span>{" "}
              and it would just be so amazing to be given the oppertunity to
              work as a developer.
            </p>
          </span>
          <button
            onClick={() => readMore("self", "a-me", "Learn more")}
            className="a-me read-button2"
          >
            Learn more
          </button>
        </div>
        {/* END */}
        <hr />
        <div className="my-container">
          <div id="str-and-weak">
            <div id="strengts">
              <h3>Strengths</h3>
              <ul>
                <li>Enthusiasm</li>
                <li>Creativity</li>
                <li>Dedication</li>
                <li>Determination</li>
                <li>Work in teams</li>
                <li>Self discipline</li>
                <li>problem solving</li>
                <li>Possitive attitude</li>
              </ul>
            </div>
            <div id="weaknesses">
              <h3>weaknesses</h3>
              <ul>
                <li>Design</li>
                <li>Presenting</li>
                <li>Sometimes impatient</li>
                <li>Proffesional experience</li>
                <li>Focusing on small details</li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div className="my-container">
          <h3>My Heroes</h3>

          <p className="center">
            I believe you can learn a lot about someone if you know who inspires
            him or her.
        </p>
          <p className="center">
            This list is a fraction of the people that inspire me:
        </p>
          <div id="heroes">
            <div>
              <img src={armin} alt="Armin" />
            </div>
            <div>
              <img src={elon} alt="Elon" />
            </div>
            <div>
              <img src={neil} alt="Neil" />
            </div>
            <div>
              <img src={bill} alt="Bill" />
            </div>
            <div>
              <img src={brian} alt="Brian" />
            </div>
            <div>
              <img src={dundee} alt="Dundee" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
