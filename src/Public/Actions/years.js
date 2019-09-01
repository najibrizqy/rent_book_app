import Axios from 'axios';

export const getYears = () => {
  return {
    type: 'GET_YEARS',
    payload: Axios.get (`${process.env.REACT_APP_HOST}/books/year/`),
  };
};
