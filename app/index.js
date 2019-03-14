import * as React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as styles from './styles';

import store from './redux/configStore.js';

import App from './components/App.jsx';

ReactDom.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('mountNode')
);
