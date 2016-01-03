import React from 'react';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';

class Main extends React.Component {

 constructor(props) {
   super(props);
 }

 render() {
   return (
     <div className="app">
       <Header title="React Baby!" />
       <Menu />
     </div>
   );
 }
};

export default Main;
