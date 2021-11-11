import React, { useEffect } from 'react';

import { onChangeBackgroundTheme, fadeIn } from 'helpers/animators';
import 'styles/about.scss';
import HappyMe from 'assets/images/happyMe.svg';
import Github from 'assets/icons/github.svg';
import LinkedIn from 'assets/icons/linkedin.svg';
import Twitter from 'assets/icons/twitter.svg';

const About = () => {
  useEffect(() => {
    document.title = 'About me | Anush kumar N';
    onChangeBackgroundTheme('about');
    fadeIn('.about-img', '.about-text');
  }, []);

  return (
    <section className="wrapper">
      <img className="about-img" src={HappyMe} alt="programmer" />
      <div className="about-text">
        <div className="gradient-text">
          Heyaa! I'm Anush kumar N, <br />
          from India. I love to code, do music and
          <br />
          rarely tour with my ride. If you like my work <br />
          don't hesitate to reach me out.
          <br />
        </div>
        <div className="social-btns">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/aksxmtvnty9"
          >
            <img src={Github} alt="github" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/anush-kumar-n-b48778145/"
          >
            <img src={LinkedIn} alt="linkedin" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/aksxmtvnty9"
          >
            <img src={Twitter} alt="twitter" />
          </a>
        </div>
        <br />
        My carrer story:
        <br />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/aksxmtvnty9"
          className="resume-btn"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default About;
