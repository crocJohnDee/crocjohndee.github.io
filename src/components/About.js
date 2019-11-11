import React from "react";
import "./sass/about/About.scss";
import me from "../images/me2.jpg";
import { Link } from "react-router-dom";
import { readMore } from "./readmore";

export const About = () => {
  return (
    <>
      <section id="about">
        <div className="opacity"></div>
        <div id="about-header">
          <h2>About_Me</h2>
        </div>


        <div className="me-container">
          <img src={me} alt="me" />

          <p id="p1">
            <br />
            Hi,
            I'm Johnny Barendrecht, Thank you so much for checking out my portfolio.

            <br /><br />

            For the last 2 years I have gained the necessary skills to start
            a career as a front-end, back-end || full-stack developer.
          </p>

          <br />

          <div id="p2">
            <p>
              In October 2017 I decided to change my career from a call-center
            agent to a web-developer. <br />I started doing courses online and
              after about one year I started an intensive one-year developers
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
                I was born and raised in the Netherands <br />
                When I was 16 years old, I worked for a{" "}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.google.com/search?q=kassenbouw&sxsrf=ACYBGNRFiyvjiGdOQXKODHzQQI2YiyqUoA:1570628652419&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiU4prXp4_lAhWHEVAKHUzdAlYQ_AUIEigB&biw=1443&bih=743"
                >
                  greenhouse construction company
              </a>
                . We mainly worked in other countries and from a pretty young age
                I was travelling all over the world for work. You could say I was working remote...
            </p>
              <br />
              <p>
                This off course was amazing, but when I turned 18, I thought it was
                time for me to travel by myself and leave my amazing construction
              job. <br />I did that for a few years. Most of my time I spent in
                Australia where I lived for about 3 years. One of the best
              experiences I had there, was working on a{" "}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.google.com/search?q=cattle+station+nt&sxsrf=ACYBGNT0LPxSbtHk7E8nkLL6I49G9iR5KA:1570629426117&source=lnms&tbm=isch&sa=X&ved=0ahUKEwid0ZHIqo_lAhVCbFAKHVpvB6MQ_AUIEigB&biw=1443&bih=743"
                >
                  cattle station
              </a>{" "}
                in the outback of Australia, I could talk about this for hours!
            </p>
              <br />
              <p>
                <span className="first-letter">5</span> years ago I moved to
              Berlin when my son was born. <br />
                Since I did not have any formal education, I did what was the easiest
              thing for me to do. <br />
                Working in call centers for the Dutch market. It was fun at first,
                but after a few years I felt there was nothing new to learn and
                there were no challenges left, I was very bored and so I quit.
            </p>
              <br />
              <p>
                I really had no idea what I wanted to do. I knew that I wanted to
                do something that would always keep challenging me and would come with a
                great career path. The latter became extra important to me when my
              son was born. <br />A few months after I quit my last call center
                job, I stumbeld upon a video from a guy who explained how he
                became a web developer. I was very inspired by his story and
                started to watch more videos about web developmont. at first, I
                alway assumed that to be a programmer you would need a high
                level of education. By watching these people, I quickly learned this
                was not the case and I was inspired to become a developer myself.
            </p>
              <br />
              <p>
                You can read more about how I educated myself over the last 2 years,
              on my <Link to="Experience">experience page.</Link> <br />
                I'd just like to add that I am a very positive person, I had over a
                decade of fun travelling aound the world and I'm very lucky to
                have a healthy and amazing young child. I think people around me
              often recognise my natural optisim. <br />I can say though, That I
                am way more excited about my career and my future in tech than
              anything I ever did{" "}
                <span
                  className="side-note"
                  title="Besides from becoming a father off course"
                >
                  before
              </span>{" "}
                and it would be so amazing to be given the opportunity to
                work as a developer.
            </p>
            </span>
          </div>
          <button
            onClick={() => readMore("self", "a-me", "Learn more")}
            className="a-me read-button2"
          >
            Learn more
          </button>
        </div>
      </section>



    </>
  );
};
