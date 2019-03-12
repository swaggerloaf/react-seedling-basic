import * as React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import * as styles from './styles';

import store from './redux/configStore.js';

import TodoAppContainer from './components/TodoAppContainer.jsx/index.js';

ReactDom.render(
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>,
  document.getElementById('mountNode')
);
