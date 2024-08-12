import React from 'react';
import './Hero.css';
import imgp from '../../assets/personalportfolio-img.png';
import resume from '../../assets/resume photo.png';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <div id="home" className='hero'>
      <img src={imgp} alt='Personal Portrait' />

      <h1>
        <span>I am Deepanshul</span>, Web developer based in India
      </h1>
      <p>
        I am an enthusiastic Electronics and Communication Engineering (ECE) student at Jaypee Institute of Information Technology, passionate about expanding my horizons in the world of technology.
      </p>

      <div className='hero-action'>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          className='hero-connect'
        >
          Connect with me
        </Link>
        <a 
          href={resume} 
          download 
          className='hero-resume'
        >
          My resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
