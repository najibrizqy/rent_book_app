import {combineReducers} from 'redux';

import books from './books';
import genres from './genres';
import years from './years';

const rootReducer = combineReducers ({
  books,
  genres,
  years,
});

export default rootReducer;
