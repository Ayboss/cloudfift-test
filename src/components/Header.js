import React from 'react';
import '../css/Header.css';
import logo from '../assets/logo.svg';
function Header() {
    return (
       <header className="header">
           <span className="header__logo">
               <img src={logo} className="header__logoImg" alt="Vasiti logo" />
           </span>
           <ul className="header__list">
               <li className="header__item">ABOUT US</li>
               <li className="header__item">STORIES</li>
               <li className="header__item">CONTACT</li>
               <li className="header__item">LOG IN</li>
               <li className="header__item header__item--signup">SIGN UP</li>
           </ul>
       </header>
    )
}

export default Header
