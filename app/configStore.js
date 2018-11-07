import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';

import createSagaMiddleware from 'redux-saga';
import { helloSaga } from './sagas/helloSaga';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(helloSaga);

export default store;