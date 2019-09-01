const initState = {
    userProfile:{},
    userId:{},
    errMsg:'',
    isLoading:false,
    isRejected:false,
    isFulfilled:false,
}

const user = (state = initState, action)=>{
    switch(action.type){
        case 'LOGIN_PENDING':
            return{
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false,
            }
        case 'LOGIN_REJECTED':
            return{
                ...state,
                isLoading:false,
                isRejected:true,
                errMsg:action.payload.response.data.errMsg
            }
        case 'LOGIN_FULFILLED':
            return{
                ...state,
                isLoading:false,
                isFulfilled:true,
                token:action.payload.data.token
            }
        case 'REGISTER_PENDING':
            return{
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false,
            }
        case 'REGISTER_REJECTED':
            return{
                ...state,
                isLoading:false,
                isRejected:true,
                errMsg:action.payload.response.data.errMsg
            }
        case 'REGISTER_FULFILLED':
            return{
                ...state,
                isLoading:false,
                isFulfilled:true,
            }
        case 'GET_PROFILE_PENDING':
            return{
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false,
            }
        case 'GET_PROFILE_REJECTED':
            return{
                ...state,
                isLoading:false,
                isRejected:true,
            }
        case 'GET_PROFILE_FULFILLED':
            return{
                ...state,
                isLoading:false,
                isFulfilled:true,
                userProfile: action.payload.data
            }
        case 'GET_USERID_PENDING':
            return{
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false,
            }
        case 'GET_USERID_REJECTED':
            return{
                ...state,
                isLoading:false,
                isRejected:true,
            }
        case 'GET_USERID_FULFILLED':
            return{
                ...state,
                isLoading:false,
                isFulfilled:true,
                userId: action.payload.data.values
            }
      default:
        return state
    }
  }

export default user