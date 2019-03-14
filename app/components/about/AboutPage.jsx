import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AboutPage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>I am a walrus</h1>
        <p>About Stuff</p>
        <Link to="/" className="btn btn-primary btn-lg">
          Home
        </Link>
      </div>
    );
  }
}
