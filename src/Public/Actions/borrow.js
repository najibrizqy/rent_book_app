import Axios from 'axios'
export const borrowBook = (data) => {
    return{
        type: 'BORROW_BOOK',
        payload: Axios.post(`${process.env.REACT_APP_HOST}/rent_book/`,data,{
            headers:{
              Authorization : window.localStorage.getItem("token")
            }
          }
        )
    }
}

export const returnBook = (data, id) => {
    return{
        type: 'RETURN_BOOK',
        payload: Axios.patch(`${process.env.REACT_APP_HOST}/rent_book/${id}`,data,{
            headers:{
              Authorization : window.localStorage.getItem("token")
            }
          }
        )
    }
}

export const getHistory = (id) => {
  return{
      type: 'HISTORY_BORROW',
      payload: Axios.get(`${process.env.REACT_APP_HOST}/rent_book/history/${id}`,{
          headers:{
            Authorization : window.localStorage.getItem("token")
          }
        }
      )
  }
}

export const getBorrowedBook = (id) => {
  return{
      type: 'BORROWED_BOOK',
      payload: Axios.get(`${process.env.REACT_APP_HOST}/rent_book/borrowed/${id}`,{
          headers:{
            Authorization : window.localStorage.getItem("token")
          }
        }
      )
  }
}