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
        <h1>Hello !</h1>
        I'm Anush kumar N,
        <br />a Software developer
        <br /> specializing in
        <br /> Web development.
      </div>
      <img className="intro-img" src={Programmer} alt="programmer" />
    </section>
  );
};

export default Intro;
