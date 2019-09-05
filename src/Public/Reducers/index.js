import {combineReducers} from 'redux';

import books from './books';
import genres from './genres';
import years from './years';
import user from './user';
import borrow from './borrow';

const appReducer = combineReducers ({
  books,
  genres,
  years,
  user,
  borrow,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;
