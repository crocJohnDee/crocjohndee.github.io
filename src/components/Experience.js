import React from "react";
import "./sass/experience/Experience.scss";
import freeCodeCamp from "../images/fcc.png";
import udemy from "../images/udemy.png";
import internet from "../images/internet.png";
import eJavascript from "../images/e-javascript.jpg";
import jdJnj from "../images/jd-jnj.jpg";
import jdHnc from "../images/jd-hnc.jpg";
import rapb from "../images/rapb.jpg";
import dci from "../images/dci.jpg";
import tutor from "../images/tutor2.png";
import { readMore } from "./readmore";
import { Title } from "./Title";
const agent = navigator.userAgent;
let courses;
let slideIndex = 0;

const List = props => {
  return (
    <>
      <p className="udemy">
        <a target="_blank" rel="noreferrer noopener" href={props.domain}>
          {props.course}
        </a>{" "}
        <br />
        by: {props.name}
      </p>
    </>
  );
};
const FavSite = props => {
  return (
    <p>
      <a target="_blank" rel="noreferrer noopener" href={props.domain}>
        {props.name}
      </a>
    </p>
  );
};
const selected = e => {
  const buttons = document.querySelectorAll(".read-button")
  buttons.forEach(button => button.classList.remove("select"));
  e.target.classList.add("select");

}

export const Experience = () => {
  return (
    <>
      <section id="experience">

        <div id="experience-header">
          <h2>
            <Title text="Experience" />
          </h2>
        </div>

        <div id="header-buttons">
          <button className="read-button"
            onClick={e => {
              selected(e);
              readMore("online", "but-onl")
            }}>
            2017
          </button>

          <button className="read-button center-button"
            onClick={e => {
              selected(e);
              readMore("dci", "but-dci")
            }}>
            2018
            </button>

          <button className="read-button"
            onClick={e => {
              selected(e);
              readMore("tutor", "but-tutor")
            }}>
            2019
            </button>
        </div>

        {/*2017*/}
        <span style={{ display: "block" }} className="online exp">
          <div id="online">
            <img
              className="header-image"
              style={{ margin: "25px auto" }}
              src={freeCodeCamp}
              alt="fcc"
            />
            <p>
              <span className="first-letter">I</span>n Oktober 2017 I started
                a course on{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.freecodecamp.org/"
              >
                FreeCodeCamp.
                </a>{" "}
              Here I earned 2 certificates. One for{" "}
              <span className="cert">Responsive Web Design</span> that
              covered:
              </p>
            <ul>
              <li>Basic HTML and HTML5</li>
              <li>Basic CSS</li>
              <li>Applied Visual Design</li>
              <li>Applied Accessibility</li>
              <li>Responsive Web Design Principles</li>
              <li>CSS Flexbox</li>
              <li>CSS Grid</li>
              <li>Responsive Web Design Projects</li>
            </ul>{" "}
            <p>
              And one for{" "}
              <span className="cert">
                Javascript Algorithms And Data Structures
                </span>{" "}
              that covered:
              </p>
            <ul>
              <li>Basic JavaScript</li>
              <li>ES6</li>
              <li>Regular Expressions</li>
              <li>Debugging</li>
              <li>Basic Data Structures</li>
              <li>Basic Algorithm Scripting</li>
              <li>Object Oriented Programming</li>
              <li>Functional Programming</li>
              <li>Intermediate Algorithm Scripting</li>
              <li>JavaScript Algorithms and Data Structures Projects</li>
            </ul>
          </div>
        </span>

        {/* 2018 */}
        <span className="dci exp">
          <div id="dci">
            <img className="header-image" src={udemy} alt="udemy" />
            <p>
              <span className="first-letter">A</span>bout halfway tru my first
                certificate I als started courses on{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.udemy.com/"
              >
                Udemy.
                </a>{" "}
              <br />
              Here are some of the courses I followed over the past 18 months:
              </p>

            <List
              name="Colt Steele"
              course="The Web Developer Bootcamp"
              domain="https://www.udemy.com/course/the-web-developer-bootcamp/"
            />
            <List
              name="Rob Percival"
              course="The Complete Web Developer Course 2"
              domain="https://www.udemy.com/course/the-complete-web-developer-course-2/"
            />
            <List
              name="Jad Khalili"
              course="Git: Become an Expert in Git & GitHub in 4 Hours"
              domain="https://www.udemy.com/course/git-expert-4-hours/"
            />
            <List
              name="Joseph Delgadillo, Nick Germaine"
              course="The Complete Full-Stack JavaScript Course!"
              domain="https://www.udemy.com/course/full-stack-javascript/"
            />
            <List
              name="Eric Greene"
              course="Getting Started With React"
              domain="https://www.udemy.com/course/getting-started-with-react/"
            />
            <List
              name="Eduonix Learning Solutions, Eduonix-Tech ."
              course="Learn Object Oriented PHP By Building a Complete Website"
              domain="https://www.udemy.com/course/learn-object-oriented-php-by-building-a-complete-website/"
            />

            <div className="mySlides">

              <img className="header-image" src={internet} alt="internet" />
              <p>
                <span className="first-letter">I </span> like doing code
                challenges on sites like:{" "}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://edabit.com"
                >
                  Edabit
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.codewars.com"
                >
                  Code Wars.
                </a>
              </p>
              <p>I also spend hours and hours on sites like:</p>

              <FavSite
                name="StackOverflow"
                domain="https://stackoverflow.com/"
              />
              <FavSite
                name="MDN web docs"
                domain="https://developer.mozilla.org"
              />
              <FavSite name="w3schools" domain="https://www.w3schools.com/" />
              <FavSite name="Github" domain="https://github.com/crocJohnDee" />
              <FavSite name="Codepen" domain="https://codepen.io/JohnnyBar" />
              <FavSite name="Css-Tricks" domain="https://css-tricks.com/" />
              <FavSite name="Youtube" domain="https://youtube.com/" />
              <span style={{ textAlign: "center", display: "block" }}>
                And many more...
              </span>
              <br />
              <p>And these are some of the books I read, or am reading:</p>
              <div className="books">
                <img className="book" src={eJavascript} alt="ejavascript" />
                <img className="book" src={jdJnj} alt="internet" />
                <img className="book" src={jdHnc} alt="internet" />
                <img className="book" src={rapb} alt="internet" />
              </div>
              <p>
                <span className="cert">
                  I know that doesnt seem like a lot of books. But I noticed
                  that a lot of books are outdated. The technology is changing
                  so rapidaly, that by the time a author has finished a book,
                  there is updated information online. <br /> <br />
                  It is still nice to have some phisical books laying around.{" "}
                </span>
              </p>
            </div>


          </div>
        </span>

        {/* 2019 */}
        <span className="tutor exp">
          <div id="tutor">
            <p>
              <img src={dci} alt="dci" className="header-image" />
              <span className="first-letter">I</span>n February 2019 I started a
              intensive one-year course at the{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://digitalcareerinstitute.org/courses/web-development-course"
              >
                Digital Career Institute.
              </a>{" "}
            </p>
            <p>
              {" "}
              Starting this course was great for me. I learned a lot from the
              courses I did online. But i was struggling to really focus on one
              technology. There were so many different job listings online, that
              I jumped from one technology to the next without really
              understanding the first thing I was learning. And I quickly
              couldn't see the forest from the trees anymore.
            </p>
            <p>
              <span className="first-letter">@</span> DCI, they lay there focus
              on the{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://miro.medium.com/max/680/1*s3lCEFnq4RyAKeeYnhTkVw.jpeg"
              >
                MERN Stack.
              </a>{" "}
              Some of the greatest thing about this course is the step by step
              focus on many different topics invololving programming. And to be
              around so many like-mided people who are also excited about
              programming.
            </p>
            <p>
              In my{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/crocJohnDee?tab=repositories"
              >
                Github repositorie
              </a>{" "}
              You will find nearly 100 projects or challenges we have been
              working tru this year.
            </p>
            <p>
              Currently I am still a student at DCI. But according to my mentor
              I should start looking for a career, because he believes I am
              ready. <br />
              Hearing this made me super excited off course. Starting a career
              in web development has been my biggest dream now for 2 years. And
              to hear from my mentor that I have required the nescessery skills
              to start a career, for me is just undiscribible!
            </p>

            <p>
              <img src={tutor} alt="tutor" className="header-image" />
              <span className="first-letter">b</span>ecause of my prior
              experience with the courses I did online, I was choosen from a
              class of 15 students to become the class tutor.
            </p>
            <p>
              This is a paid position by DCI and I can honsestly say that I felt
              pretty proud to recieve my first paycheck for something that was
              related to web-development.
            </p>
            <p>
              when we first started covering JavaScript, that's when I became
              the class Tutor. Every friday afternoon for 4 hours, my fellow
              classmates would come and I assist them with projects or
              challenges that we have been covering for that week.
            </p>
            <p>
              The best thing for me about this position, is the fact that I
              learned so much more than that I wouldnt have without this
              experience. What I learned, is that the best way to learn
              something yourself is to try and explain it to your peers. <br />
              This is what I do now at home as well. I have a gigantic
              whiteboard in my room and whenever I am struggling with a problem,
              I would go to the whitboard and draw out the problem. Trying to
              explain it to myself as I would to others. <br />
              Also, other developers may come across other problems and it is a
              huge challange and passion to help and tackle that problem. <br />{" "}
              Apperenly you learn a lot from other developers their bugs.
            </p>
            <p>
              And besides that, I'm also very happy that I was able to help
              others. Many classmates have become real mates and we also come
              together outside of school a lot and code together.
            </p>
          </div>
        </span>

        <p id="gitpen">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/crocJohnDee?tab=repositories"
          >
            <i className="fab fa-github" />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://codepen.io/JohnnyBar"
          >
            <i className="fab fa-codepen" />
          </a>
        </p>

      </section>
    </>
  );
};
