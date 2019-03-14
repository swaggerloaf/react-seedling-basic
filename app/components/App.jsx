import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage.jsx';
import AboutPage from './about/AboutPage.jsx';
import PostsPage from './posts/PostsPage.jsx';
import Header from './common/Header.jsx';
import PageNotFound from './PageNotFound.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/posts" component={PostsPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}
