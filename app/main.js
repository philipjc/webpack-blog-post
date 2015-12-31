import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import HeaderComponent from './component.jsx';


main();

function main() {

  const app = document.createElement('div');
  document.body.appendChild(app);
  ReactDOM.render(<HeaderComponent title="React Baby!" />, app);
  
}
