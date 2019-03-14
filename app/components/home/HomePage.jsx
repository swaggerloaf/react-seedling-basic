import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Todo Admin</h1>
        <p>Stuff</p>
        <Link to="/about" className="btn btn-primary btn-lg">
          About
        </Link>
      </div>
    );
  }
}
