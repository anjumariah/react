import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./loginTypes";
type logreducer = {
    isAutheticated:boolean
    email:string
    pass:string
    action:string
    type:string
}

const initialState = {
    isAuthenticated: false,
    adminInfo : {email:'admin97@gmail.com',password:'admin97'}
};

const authReducer = (state = initialState,action:logreducer) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated:true 
            }
        case LOGOUT_SUCCESS :
            return{
                ...state,
                isAuthenticated:false,
            };
        default : return state;        
    }
}

export default authReducer;