import React, { useState } from "react";
import "./navCss.css";
import typoLogo from '../../images/typoLogo.svg';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">

      <span className="nav-logo">   
     <a href="/">      
     <img src={typoLogo} alt="hope logo" ></img>
     </a>   
</span>


      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Início</a>
        <a href="/sobre">A Hope</a>
        <a href="/galeria">Galeria</a>
        <a href="/contato">Contato</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;