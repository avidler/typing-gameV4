import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-expand-lg navbar-expand-sm navbar-light bg-light center">
        
        <div className="collapse.navbar-collapse">
        <ul className="nav navbar-nav ">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Play</Link>
          </li>
          <li className="navbar-item">
          <Link to="/scoreboard" className="nav-link">Scoreboard</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}