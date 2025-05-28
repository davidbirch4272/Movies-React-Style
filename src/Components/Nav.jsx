import React from "react";
import nav from "./nav.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";




function Nav() {

function openMenu() {
  document.body.classList += " menu--open"
  console.log(openMenu)
}


function closeMenu() {
  document.body.classList.remove('menu--open')
}

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
              <Link to="/"
              className="
              nav__link 
              link__hover-effect
              link__hover-effect--blue"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="About"
              className="
              nav__link 
              nav__link--about
              link__hover-effect
              link__hover-effect--blue"
              >
                About
              </Link>
            </li>
            <li>
              <Link to={"./Searcher"}
              className="
              nav__link 
              link__hover-effect
              link__hover-effect--blue"
              >Movies
              </Link> 
            </li>
          </ul>
          <button className="btn__menu" onClick={openMenu()}>
            <GiHamburgerMenu />            
          </button>
          <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick={closeMenu()}>
              <i className="fas fa-times"></i>
            </button>
            <ul
              className="
            menu__links
            "
            >
              <li className="menu__list">
                <Link to="/"
                className="
                menu__link
                menu__hover-effect
                menu__hover-effect--white"
                  onclick={closeMenu()}
                >
                  Home
                </Link>
              </li>
              <li className="menu__list">
                <Link to="About"
                className="
                menu__link
                menu__link--about
                menu__hover-effect
                menu__hover-effect--white"
                  onclick={closeMenu()}
                >
                  About
                </Link>
              </li>
              <li className="menu__list">
                <Link to={"./Searcher"}
                className="
                menu__link
                menu__hover-effect
                menu__hover-effect--white"
                  onclick={closeMenu()}
                >
                  Movies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
