import React, { useEffect } from 'react';

import 'styles/intro.scss';
import Programmer from 'assets/images/programmer.svg';
import { onChangeBackgroundTheme, fadeIn } from 'helpers/animators';

const Intro = () => {
  useEffect(() => {
    document.title = 'Home | Anush kumar N';
    onChangeBackgroundTheme('main');
    fadeIn('.intro-text', '.intro-img');
  }, []);

  return (
    <section className="wrapper">
      <div className="intro-text">
        <span>
          <h1>Hello</h1>
          <h2>👋</h2>
        </span>
        <p>
          I'm Anush kumar N, A software engineer specializing in Web
          development.
        </p>
      </div>
      <img className="intro-img" src={Programmer} alt="programmer" />
    </section>
  );
};

export default Intro;
