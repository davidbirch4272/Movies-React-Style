import React from "react";
import nav from "./nav.css";

function Nav() {
  return (
    <>
      <nav>
        <div className="nav__container">
          <div className="logo__container">
            <img className="logo" src="./movies.gif" alt=""></img>
            <h1 className="title">David's Theater</h1>
          </div>
          <ul className="nav__links">
            <li>
              <a
                href="index.html"
                className="
              nav__link 
              link__hover-effect
              link__hover-effect--blue"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="
              nav__link 
              nav__link--about
              link__hover-effect
              link__hover-effect--blue"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="selector.html"
                className="
              nav__link 
              link__hover-effect
              link__hover-effect--blue"
              >
                Movies
              </a>
            </li>
          </ul>
          <button className="btn__menu" onClick="openMenu()">
            <i className="fas fa-bars"></i>
          </button>
          <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick="closeMenu()">
              <i className="fas fa-times"></i>
            </button>
            <ul
              className="
            menu__links
            "
            >
              <li className="menu__list">
                <a
                  href="index.html"
                  className="
                menu__link
                menu__hover-effect
                menu__hover-effect--white"
                  onclick="closeMenu()"
                >
                  Home
                </a>
              </li>
              <li className="menu__list">
                <a
                  className="
                menu__link
                menu__link--about
                menu__hover-effect
                menu__hover-effect--white"
                  onclick="closeMenu()"
                >
                  About
                </a>
              </li>
              <li className="menu__list">
                <a
                  href="selector.html"
                  className="
                menu__link
                menu__hover-effect
                menu__hover-effect--white"
                  onclick="closeMenu()"
                >
                  Movies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
