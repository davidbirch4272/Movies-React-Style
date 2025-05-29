import React from "react";
import footer from "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer__container">
          <div className="footer__row">
            <div className="footer__logo--container">
              <figure className="footer__logo"></figure>
              <Link
                to="/">
                <img
                  src="./movies.gif"
                  className="footer__logo--img"
                  alt=""
                ></img>
              </Link>
            </div>
            <div className="footer__links">
              <Link
                to="/"
                className="                           
    footer__link
    link__hover-effect
    link__hover-effect--white"
              >
                Home
              </Link>
              <Link
                to=""
                className="
    footer__link 
    footer__link--about
    link__hover-effect
    link__hover-effect--white"
              >
                About
              </Link>
              <Link
                to={"./Searcher"}
                className="
    footer__link
    link__hover-effect
    link__hover-effect--white"
              >
                Movies
              </Link>
            </div>
            <div className="footer__copyright">
              Copyright &copy; 2025 David P. Birch. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
