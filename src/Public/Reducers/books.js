const initialState = {
    booksList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
  };
  
  const books = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_BOOKS_PENDING':
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
        };
      case 'GET_BOOKS_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'GET_BOOKS_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          booksList: action.payload.data.values,
        };
      case 'GET_BOOK_DETAIL_PENDING':
        return{
          ...state,
          isLoading:true,
          isRejected:false,
          isFulfilled:false,
        };
      case 'GET_BOOK_DETAIL_REJECTED':
        return{
          ...state,
          isLoading:false,
          isRejected:true,
        };
      case 'GET_BOOK_DETAIL_FULFILLED':
        return{
          ...state,
          isLoading:false,
          isFulfilled:true,
        };
      case 'ADD_BOOKS_PENDING':
        return{
          ...state,
          isLoading:true,
          isRejected:false,
          isFulfilled:false,
        };
      case 'ADD_BOOKS_REJECTED':
        return{
          ...state,
          isLoading:false,
          isRejected:true,
        };
      case 'ADD_BOOKS_FULFILLED':
        return{
          ...state,
          isLoading:false,
          isFulfilled:true,
        };
      default:
        return state;
    }
  };
  
  export default books;
  