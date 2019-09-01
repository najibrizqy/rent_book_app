import Axios from 'axios';

export const getStatus = () => {
  return {
    type: 'GET_STATUS',
    payload: Axios.get (`${process.env.REACT_APP_HOST}/status`),
  };
};
