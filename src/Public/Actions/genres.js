import Axios from 'axios';

export const getGenres = () => {
  return {
    type: 'GET_GENRES',
    payload: Axios.get (`${process.env.REACT_APP_HOST}/genre`),
  };
};
