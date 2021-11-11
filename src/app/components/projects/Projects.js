import React, { useEffect } from 'react';

import 'styles/projects.scss';
import { projectList } from './projectList.js';
import ProjectItem from './ProjectItem';
import { onChangeBackgroundTheme, fadeIn } from 'helpers/animators';
import ArrowIcon from 'assets/icons/left-arrow.svg';

/**
 * @param {string} direction
 * @returns
 */
const handleCarouselNavigation = (direction) => {
  let carouselDiv = document.querySelector('.project-carousel-wrapper');
  if (!carouselDiv) {
    console.error('carousel node not found');
    return;
  }

  let cachedMarginLeft = carouselDiv.style.marginLeft;
  const splitCachedMarginLeft = cachedMarginLeft.split('%') || [];
  cachedMarginLeft = Number(splitCachedMarginLeft[0]);
  if (cachedMarginLeft > 0) {
    cachedMarginLeft = cachedMarginLeft * -1;
  }

  switch (direction) {
    case 'left':
      if (cachedMarginLeft === 0) {
        carouselDiv.style.marginLeft = `-400%`;
      } else {
        carouselDiv.style.marginLeft = `${cachedMarginLeft + 100}%`;
      }
      break;
    case 'right':
      if (cachedMarginLeft * -1 >= 400) {
        carouselDiv.style.marginLeft = `0%`;
      } else {
        carouselDiv.style.marginLeft = `${cachedMarginLeft - 100}%`;
      }
      break;
    default:
      return;
  }
};

const Projects = () => {
  useEffect(() => {
    document.title = 'Projects | Anush kumar N';
    onChangeBackgroundTheme('projects');
    fadeIn('.left', '.projects-info');
  }, []);

  return (
    <div className="wrapper">
      <div className="left"></div>
      <div className="projects-info">
        <img
          className="arrow"
          src={ArrowIcon}
          alt="left-arrow"
          onClick={() => handleCarouselNavigation('left')}
        />
        <div className="project-carousel">
          <div className="project-carousel-wrapper">
            {projectList.map(({ name, link, type }, index) => (
              <ProjectItem
                name={name}
                link={link}
                type={type}
                index={index}
                key={name}
              />
            ))}
          </div>
        </div>
        <img
          className="arrow right"
          src={ArrowIcon}
          alt="right-arrow"
          onClick={() => handleCarouselNavigation('right')}
        />
      </div>
    </div>
  );
};

export default Projects;
