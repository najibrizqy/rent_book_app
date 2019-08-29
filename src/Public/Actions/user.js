import Axios from 'axios';

const token = window.localStorage.getItem("token");
const url = 'http://localhost:8016/users/';

export const login = (data) => {
    return {
      type:'LOGIN',
      payload: Axios.post(url + 'login', data)
    }
}
export const register = (data) => {
    return {
        type:'REGISTER',
        payload: Axios.post(url + 'register', data)
    }
}
export const getProfile = () => {
    return {
        type:'GET_PROFILE',
        payload: Axios.get(url + 'profile',{
            headers:{
                Authorization : token
            }
        })
    }
}