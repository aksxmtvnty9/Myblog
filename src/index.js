import React from 'react';
import ReactDOM from 'react-dom';

import { renderApp } from './app/index';
import './styles/_styles.scss';

const main = document.getElementById('main');

ReactDOM.render(renderApp(), main);
