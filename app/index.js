import '@babel/polyfill';
import * as React from 'react';
import ReactDom from 'react-dom';
//import { Provider } from 'react-redux';
import * as styles from './styles';

//import store from './configStore.js';

import Counter from './components/Counter.jsx';


ReactDom.render(
  <Counter />,
  document.getElementById('mountNode')
);
