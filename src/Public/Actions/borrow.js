import Axios from 'axios'
export const borrowBook = (data) => {
    return{
        type: 'BORROW_BOOK',
        payload: Axios.post(`http://localhost:8016/rent_book/`,data,{
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
        payload: Axios.patch(`http://localhost:8016/rent_book/${id}`,data,{
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
      payload: Axios.get(`http://localhost:8016/rent_book/borrowed/${id}`,{
          headers:{
            Authorization : window.localStorage.getItem("token")
          }
        }
      )
  }
}