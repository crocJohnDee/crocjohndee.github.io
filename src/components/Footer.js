import React from "react";
import "./sass/footer/footer.scss";
export const Footer = () => {
  return (
    <>
      <footer id="footer">
        <p>
          <span>
            <a
              className="bb"
              href="https://www.linkedin.com/in/johnny-barendrecht/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </span>
          <span>
            <a
              className="bb"
              href="https://github.com/crocJohnDee"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-github"></i>
            </a>
          </span>
          <span>
            <a className="bb" href="mailto:johnny.barendrecht@gmail.com">
              <i className="far fa-envelope"></i>
            </a>
          </span>
        </p>
        <p id="footer-text">&copy; Johnny Barendrecht - 2019 | web-developer</p>
      </footer>
    </>
  );
};
