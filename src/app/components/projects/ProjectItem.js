import React from 'react';
import PropTypes from 'prop-types';

import 'styles/projects.scss';

const propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  link: PropTypes.string,
  index: PropTypes.number,
};

const ProjectItem = ({ name, type, link, index }) => {
  return (
    <div key={index} className="project-detail">
      <div className="project-def">
        <p className="project-heading">{name}</p>
        <p className="project-type">{type}</p>
        <a
          className="project-link"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
      </div>
      <div className={`random-object-${index + 1}`}></div>
    </div>
  );
};

ProjectItem.propTypes = propTypes;

export default ProjectItem;
