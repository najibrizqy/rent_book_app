const initialState = {
    yearsList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
  };
  
  const years = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_YEARS_PENDING':
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
        };
      case 'GET_YEARS_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'GET_YEARS_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          yearsList: action.payload.data.values,
        };
      default:
        return state;
    }
  };
  
  export default years;
  