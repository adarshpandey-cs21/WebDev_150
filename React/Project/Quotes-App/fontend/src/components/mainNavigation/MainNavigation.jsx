import React from 'react';
import {Link} from 'react-router-dom';
function MainNavigation() {
  return (
    <div>
        <h1>Quotes App</h1>
        <ul>
            <li><Link to='/'>All Quotes</Link></li>
            <li><Link to='/new'>Add Quotes</Link></li>
        </ul>
    </div>
  )
}

export default MainNavigation