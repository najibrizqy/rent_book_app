import Axios from 'axios';

export const getStatus = () => {
  return {
    type: 'GET_STATUS',
    payload: Axios.get ('http://localhost:8016/status'),
  };
};
