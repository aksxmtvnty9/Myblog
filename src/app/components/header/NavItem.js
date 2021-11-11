import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import 'styles/header.scss';

const propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
};

const NavItem = ({ name, href }) => {
  const history = useHistory();
  const onClickAction = (e) => {
    const floatingNav = document.querySelector('.floating-nav');
    if (!floatingNav) {
      console.error('Floating Nav node not found');
      return;
    }

    const floatingNavChildren = floatingNav.children;
    for (let i = 0; i < floatingNavChildren.length; i++) {
      if (floatingNavChildren[i]) {
        floatingNavChildren[i].classList.remove('li-active');
      }
    }
    e.target.classList.add('li-active');
    history.push(href);
  };

  return <li onClick={onClickAction}>{name}</li>;
};

NavItem.propTypes = propTypes;

export default NavItem;
