import React, { useState } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menu, setmenu] = useState("home");

  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <li>
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            onClick={() => setmenu("home")}
          >
            <p>Home</p>
          </Link>
          {menu === "home" ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            onClick={() => setmenu("about")}
          >
            <p>About me</p>
          </Link>
          {menu === "about" ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <Link 
            to="services" 
            smooth={true} 
            duration={500} 
            onClick={() => setmenu("services")}
          >
            <p>Services</p>
          </Link>
          {menu === "services" ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <Link 
            to="portfolio" 
            smooth={true} 
            duration={500} 
            onClick={() => setmenu("portfolio")}
          >
            <p>Portfolio</p>
          </Link>
          {menu === "portfolio" ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            onClick={() => setmenu("contact")}
          >
            <p>Contact me</p>
          </Link>
          {menu === "contact" ? <img src={underline} alt='' /> : null}
        </li>
      </ul>
      <div className='nav-connect'>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500}
        >
          Connect With Me
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
