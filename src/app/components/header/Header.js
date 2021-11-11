import React from 'react';

import NavItem from './NavItem';
import 'styles/header.scss';
import thunder from 'assets/images/thunder.svg';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
];

const Header = () => {
  return (
    <>
      <header className="header">
        <p>@aksxmtvnty9</p>
        <img className="thunder-icon" src={thunder} alt="thunder icon" />
      </header>
      <ul className="floating-nav">
        {navItems.length > 0 &&
          navItems.map(({ name, href }, index) => (
            <NavItem name={name} href={href} key={index} />
          ))}
      </ul>
    </>
  );
};

export default Header;
