import { FETCH_ABOUTDATA_REQUEST,FETCH_ABOUTDATA_SUCCESS, FETCH_ABOUTDATA_FAILURE } from "./aboutType"



const initialState = {
    loading :false,
    aboutData : [],
    error: ''
}

const aboutReducer = ( state = initialState, action) => {
    switch(action.type) {
        case FETCH_ABOUTDATA_REQUEST :
            return {
                ...state,
                loading:true
            }
        case FETCH_ABOUTDATA_SUCCESS :
            return{
                loading :false,
                aboutData :action.payload,
                error: ''
            }
        case FETCH_ABOUTDATA_FAILURE :
            return {
                loading: false,
                aboutData : [],
                error: action.payload

            } 
        default : return state
        
}
}
export default aboutReducer   