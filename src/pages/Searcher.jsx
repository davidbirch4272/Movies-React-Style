import React from "react"
import Nav from '../Components/Nav';
import Footer from '../Components/Footer'
import Selector from '../Components/Selector';

function Searcher() {
  return (
    <div className="page__container"> 
      <Nav />
    <Selector />
      <main className="content__wrap">
      </main>
      <footer className="footer">
        Copyright &copy; 2025 David P. Birch. All Rights Reserved.
      </footer>
       </div>
  )
};

export default Searcher;