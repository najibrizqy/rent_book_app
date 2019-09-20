const initialState = {
    // bookData: [],
    borrowedBook: [],
    historyBorrow: [],
    isLoading: false,
    errMsg: '',
    isFulfilled: false,
    isRejected: false,
  };
  
  const borrow = (state = initialState, action) => {
    switch (action.type) {
      case 'BORROW_BOOK_PENDING':
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
        };
      case 'BORROW_BOOK_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          errMsg: action.payload.response.data.errMsg,
        };
      case 'BORROW_BOOK_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
        //   bookData: action.payload.data.values,
        };
      case 'BORROW_USER_PENDING':
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
        };
      case 'BORROW_USER_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          errMsg: action.payload.response.data.errMsg,
        };
      case 'BORROW_USER_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
        //   bookData: action.payload.data.values,
        };
      case 'RETURN_BOOK_PENDING':
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false,
        };
      case 'RETURN_BOOK_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          errMsg: action.payload.response.data.errMsg,
        };
      case 'RETURN_BOOK_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
        //   bookData: action.payload.data.values,
        };
    case 'BORROWED_BOOK_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false,
      };
    case 'BORROWED_BOOK_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        errMsg: action.payload.response.data.errMsg,
      };
    case 'BORROWED_BOOK_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        borrowedBook: action.payload.data.values[0],
      };
      case 'HISTORY_BORROW_PENDING':
    return {
      ...state,
      isLoading: true,
      isFulfilled: false,
      isRejected: false,
    };
    case 'HISTORY_BORROW_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        errMsg: action.payload.response.data.errMsg,
      };
    case 'HISTORY_BORROW_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        historyBorrow: action.payload.data.values,
      };
    case 'BORROWED_BOOK_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        borrowedBook: action.payload.data.values[0],
      };
    case 'CONFIRM_REQUEST_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false,
      };
    case 'CONFIRM_REQUEST_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'CONFIRM_REQUEST_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      };
      default:
        return state;
    }
  };
  
  export default borrow;
  