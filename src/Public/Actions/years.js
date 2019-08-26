import Axios from 'axios';

export const getYears = () => {
  return {
    type: 'GET_YEARS',
    payload: Axios.get ('http://localhost:8016/books/year/'),
  };
};
