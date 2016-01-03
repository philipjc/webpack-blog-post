import React from 'react';
import ListItem from './ListItem.jsx';

class Menu extends React.Component {

 constructor(props) {
   super(props);
   this.state = {
     menu: ['Home', 'About', 'Service']
   }
 }

 render() {
   return (
     <div className='navigation'>
       <ul className='navigation__menu'>
         { this.state.menu.map((name, idx) => {
           return <ListItem name={ name } key={ idx }/>
         })}
       </ul>
     </div>
   );
 }
};

export default Menu;
