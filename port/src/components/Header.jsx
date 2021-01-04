import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';


const active={
  color:'purple',
}
export default class Header extends Component {

  constructor(props) {
      
   super(props);
  }
  render() {
    const active={
      color:'purple',
    }
    return (
      <header id="home">
      <nav id="nav-wrap">
     
      <ul id="nav" className="nav">
      <li>
            <Link to='/'>
            Home
            </Link>
           
          </li>
          <li>
            <NavLink activeStyle={active} to="/blog">Blog
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={active} to="/contact">Contact</NavLink>
          </li>
                  </ul>
        
      </nav>
    </header>
    );
  };
};