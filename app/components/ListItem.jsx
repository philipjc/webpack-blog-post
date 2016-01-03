import React from 'react';

class ListItem extends React.Component {

 constructor(props) {
   super(props);
 }

 render() {
   return (
     <li className="menu-item">
       { this.props.name }
     </li>
   );
 }
};

export default ListItem;
