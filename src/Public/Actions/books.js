import Axios from 'axios';


export const getBooks = (Source, search, page) => {
  let url = `${Source}?page=${page}`
  if(search !== null && search !== undefined)
    url += `&search=${search}`

  return {
    type: 'GET_BOOKS',
    payload: Axios.get (url),
  }
}

export const getBooksNewRelease = () => {
  return {
    type:'GET_BOOKS_NEW_RELEASE',
    payload: Axios.get(`${process.env.REACT_APP_HOST}/books?sort=date_released&type=desc&limit=5`,{
        headers:{
          Authorization : localStorage.getItem("token")
        }
      }
    )
  }
}

export const getBookDetail = (id) => {
  return {
    type:'GET_BOOK_DETAIL',
    payload: Axios.get(`${process.env.REACT_APP_HOST}/books/${id}`,{
        headers:{
          Authorization : localStorage.getItem("token")
        }
      }
    )
  }
}

export const getBooksDonate = () => {
  return {
    type:'GET_BOOKS_DONATE',
    payload: Axios.get(`${process.env.REACT_APP_HOST}/books/donate`,{
        headers:{
          Authorization : localStorage.getItem("token")
        }
      }
    )
  }
}

export const getBooksOrder= () => {
  return {
    type:'GET_BOOKS_ORDER',
    payload: Axios.get(`${process.env.REACT_APP_HOST}/books/order`,{
        headers:{
          Authorization : localStorage.getItem("token")
        }
      }
    )
  }
}

export const addBook = (data) => {
  return {
    type:'ADD_BOOKS',
    payload: Axios.post(`${process.env.REACT_APP_HOST}/books`, data, {
        headers:{
          Authorization : localStorage.getItem("token")
        }
      }
    )
  }
}

export const editBook = (data, id) => {
  return {
    type:'EDIT_BOOK',
    payload: Axios.patch(`${process.env.REACT_APP_HOST}/books/${id}`, data, {
        headers:{
          Authorization : localStorage.getItem("token")
        }
      }
    )
  }
}

export const deleteBook = (id) => {
  return {
    type:'DELETE_BOOK',
    payload: Axios.delete(`${process.env.REACT_APP_HOST}/books/${id}`,{
        headers:{
          Authorization : localStorage.getItem("token")
        }
      }
    )
  }
}
