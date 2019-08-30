import {combineReducers} from 'redux';

import books from './books';
import genres from './genres';
import years from './years';
import user from './user';
import status from './status';

const rootReducer = combineReducers ({
  books,
  genres,
  years,
  user,
  status,
});

export default rootReducer;
