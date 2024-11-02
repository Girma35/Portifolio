import React, { useState, useRef } from 'react';
import Logo from "../../assets/images/logo.jpg";
import navCss from "./nav.module.css";
import { navItems } from "../../menu.js";

const Navbar = ({ scrollToSection, sectionRefs }) => {
  const [isDark, setIsDark] = useState(true);
  
  const menu = useRef();
  
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const showMenu = () => {
    if (menu.current) {
      menu.current.classList.toggle(navCss.showMenu);
    }
  };

  return (
    <div className={navCss.nav}>
      {/* Navbar Section */}

      {/* Right Navbar */}
      <div className={navCss.Right_Nav}>
        <a href="/" className={navCss.logo}>
          <img
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
          />
        </a>
        <ul ref={menu}>
        {navItems.map((nav) => (
  <li 
    key={nav.name} 
    onClick={() => scrollToSection(sectionRefs[`${nav.name.toLowerCase()}Ref`])}
    role="button"
    tabIndex={0}
    onKeyPress={(e) => e.key === 'Enter' && scrollToSection(sectionRefs[`${nav.name.toLowerCase()}Ref`])} 
  >
    {nav.name}
  </li>
))}
        </ul>
      </div>

      {/* Left Navbar */}
      <div className={navCss.Left_Nav}>
        <div className={navCss.theme} onClick={toggleTheme}>
          {isDark ? (
            <i className="ri-sun-line"></i>
          ) : (
            <i className="ri-moon-line"></i>
          )}
        </div>

        <div className={navCss.bars}>
          <i 
            className="ri-menu-2-line" 
            id={navCss.Bars} 
            onClick={showMenu} 
            aria-label="Toggle menu" 
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
