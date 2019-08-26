import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import Promise from 'redux-promise-middleware';

import reducers from './Reducers';

const logger = createLogger ();

const store = createStore (
  reducers,
  applyMiddleware (logger, Promise)
);

export default store;
