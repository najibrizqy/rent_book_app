const initialState = {
    genresList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
  };
  
  const genres = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_GENRES_PENDING':
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
        };
      case 'GET_GENRES_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'GET_GENRES_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          genresList: action.payload.data.values,
        };
      default:
        return state;
    }
  };
  
  export default genres;
  