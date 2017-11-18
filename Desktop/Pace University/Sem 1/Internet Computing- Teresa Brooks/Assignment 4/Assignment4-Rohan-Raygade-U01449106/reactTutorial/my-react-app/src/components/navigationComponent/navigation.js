import React, { Component } from 'react';
import{Link} from 'react-router-dom';


class Navigation extends Component {
  render() {
    return (
       
        <navigation className= 'nav'>
          <ul className= 'ullist'>
                        <li className="first">
			<Link to ="/">Homepage</Link></li>
			<li><Link to ="/team">Teams</Link> </li>
			<li className="last"><Link to ="/info">Information</Link> </li>
          </ul>
        </navigation>

    );
    
  }
}

export default Navigation;
