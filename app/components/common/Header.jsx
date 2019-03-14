import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  activeStyle = { color: '#F15B2A' };

  render() {
    return (
      <nav>
        <NavLink to="/" activeStyle={this.activeStyle} exact>
          Home
        </NavLink>
        {' | '}
        <NavLink to="/posts" activeStyle={this.activeStyle}>
          Posts
        </NavLink>
        {' | '}
        <NavLink to="/about" activeStyle={this.activeStyle}>
          About
        </NavLink>
      </nav>
    );
  }
}
