import React from "react";
import footer from './footer.css';

function Footer() {
  return (
    <>
    <footer>
        <div className="footer__container">
          <div className="footer__row">
            <div className="footer__logo--container">
              <figure className="footer__logo"></figure>
              <a href="#">
                <img src="./movies.gif" className="footer__logo--img" alt="">
                </img>
              </a>
            </div>
            <div className="footer__links">
              <a
                href=""
                className="
    footer__link
    link__hover-effect
    link__hover-effect--white"
              >
                Home
              </a>
              <a
                href=""  //You will have to fix this //
                className="
    footer__link 
    footer__link--about
    link__hover-effect
    link__hover-effect--white"
              >
                About
              </a>
              <a
                href="" //You will have to fix this //
                className="
    footer__link
    link__hover-effect
    link__hover-effect--white"
              >
                Movies
              </a>
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
