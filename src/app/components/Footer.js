import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return <footer className="footer">{currentYear} © Anush kumar N</footer>;
};

export default Footer;
