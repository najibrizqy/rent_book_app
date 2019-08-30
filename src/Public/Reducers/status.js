const initialState = {
    statusList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
  };
  
  const status = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_STATUS_PENDING':
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
        };
      case 'GET_STATUS_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'GET_STATUS_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          statusList: action.payload.data.values,
        };
      default:
        return state;
    }
  };
  
  export default status;
  