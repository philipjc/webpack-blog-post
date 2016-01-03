import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main.jsx';


main();

function main() {

  const app = document.createElement('div');
  document.body.appendChild(app);
  ReactDOM.render(<Main />, app);

}
