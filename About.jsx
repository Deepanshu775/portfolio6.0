import React from 'react';

import './About.css';
import theme from '../../assets/theme_pattern.svg';
import profileimg from '../../assets/profile3.png';

function About() {
  return (
    <div  id="about" className='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={theme} alt='' />
      </div>

      <div className='about-section'>
        <div className='about-left'>
          <img src={profileimg} alt='' />
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>
              I am a dedicated front-end developer with a strong foundation in Electronics and Communication Engineering. My unique blend of skills allows me to bridge the gap between hardware and software, creating intuitive and visually appealing web interfaces. With a passion for innovation, I leverage my technical expertise to design and develop user-centric applications that not only meet but exceed client expectations.
            </p>
            <p>
              My skill set spans a wide range of disciplines, including data structures, antenna design, project management, business acumen, and database management. This diverse expertise empowers me to approach challenges from multiple angles, whether optimizing algorithms, designing complex antenna systems, managing projects efficiently, or understanding the business implications of technology solutions. I thrive in dynamic environments where I can apply my multidisciplinary knowledge to drive innovation and deliver impactful results.
            </p>
          </div>

          <div className='about-skills'>
            <div className='about-skill'>
              <p>HTML & CSS </p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className='about-skill'>
              <p>React Js</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className='about-skill'>
              <p>Javascript</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className='about-skill'>
              <p>C++</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className='about-skill'>
              <p>Data Structures algorithms</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className='about-skill'>
              <p>Project management </p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className='about-skill'>
              <p>Databases</p>
              <hr style={{ width: '50%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className='achievement'>
      
      <div className='myachievement'>
      
      <h1>91.6 Percentile</h1>
      <p>in IIT JEE Mains</p>
      
      </div>

      <hr/>
      
      </div>
    </div>
  );
}

export default About;
