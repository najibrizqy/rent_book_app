import Axios from 'axios';

const token = window.localStorage.getItem("token");

export const getBooks = (Source, search) => {
  let url = `${Source}`
  if(search !== null )
    url += `?search=${search}`

  return {
    type: 'GET_BOOKS',
    payload: Axios.get (url),
  }
}

export const getBooksNewRelease = () => {
  return {
    type:'GET_BOOKS_NEW_RELEASE',
    payload: Axios.get('http://localhost:8016/books?sort=date_released&type=desc&limit=5',{
        headers:{
          Authorization : token
        }
      }
    )
  }
}

export const getBookDetail = (id) => {
  return {
    type:'GET_BOOK_DETAIL',
    payload: Axios.get(`http://localhost:8016/books/${id}`,{
        headers:{
          Authorization : token
        }
      }
    )
  }
}

export const addBook = (data) => {
  return {
    type:'ADD_BOOKS',
    payload: Axios.post('http://localhost:8016/books', data, {
        headers:{
          Authorization : token
        }
      }
    )
  }
}
