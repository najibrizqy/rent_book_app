const initialState = {
    booksList: [],
    booksNewRelease: [],
    booksDonate: [],
    booksOrder: [],
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
          booksList: action.payload.data,
        };
      case 'GET_BOOKS_NEW_RELEASE_PENDING':
        return{
          ...state,
          isLoading:true,
          isRejected:false,
          isFulfilled:false,
        };
      case 'GET_BOOKS_NEW_RELEASE_REJECTED':
        return{
          ...state,
          isLoading:false,
          isRejected:true,
        };
      case 'GET_BOOKS_NEW_RELEASE_FULFILLED':
        return{
          ...state,
          isLoading:false,
          isFulfilled:true,
          booksNewRelease: action.payload.data.values,
        };
      case 'GET_BOOKS_DONATE_PENDING':
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
        };
      case 'GET_BOOKS_DONATE_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          booksDonate: []
        };
      case 'GET_BOOKS_DONATE_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          booksDonate: action.payload.data.values,
        };
      case 'GET_BOOKS_ORDER_PENDING':
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
        };
      case 'GET_BOOKS_ORDER_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          booksOrder: [],
        };
      case 'GET_BOOKS_ORDER_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          booksOrder: action.payload.data.values,
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
          booksList: action.payload.data.values[0],
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
      case 'EDIT_BOOK_PENDING':
        return{
          ...state,
          isLoading:true,
          isRejected:false,
          isFulfilled:false,
        };
      case 'EDIT_BOOK_REJECTED':
        return{
          ...state,
          isLoading:false,
          isRejected:true,
        };
      case 'EDIT_BOOK_FULFILLED':
        return{
          ...state,
          isLoading:false,
          isFulfilled:true,
        };
      case 'DELETE_BOOK_PENDING':
        return{
          ...state,
          isLoading:true,
          isRejected:false,
          isFulfilled:false,
        }
      case 'DELETE_BOOK_REJECTED':
        return{
          ...state,
          isLoading:false,
          isRejected:true,
        }
      case 'DELETE_BOOK_FULFILLED':
        return{
          ...state,
          isLoading:false,
          isFulfilled:true,
        }
      case 'CONFIRM_BOOK_PENDING':
        return{
          ...state,
          isLoading:true,
          isRejected:false,
          isFulfilled:false,
        }
      case 'CONFIRM_BOOK_REJECTED':
        return{
          ...state,
          isLoading:false,
          isRejected:true,
        }
      case 'CONFIRM_BOOK_FULFILLED':
        return{
          ...state,
          isLoading:false,
          isFulfilled:true,
        }
      default:
        return state;
    }
  };
  
  export default books;
  