import React from 'react';

import "./Navabar.css";

const Navbar = () => {
  return (
    <div className="navbar">
     
        <nav role="navigation">
            <div id="menuToggle">
            
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>    
            
                <ul id="menu">
                    <a href="/"><li>HOME</li></a>
                    <a href="/"><li>CLOTHIN</li></a>
                    <a href="/"><li>SKATEBOARDS</li></a>
                    <a href="/"><li>FOOTWEAR</li></a>
                    <a href="/"><li>ACCESORIES</li></a>
                    <a href="/"><li>BLOG</li></a>      
                </ul>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;
