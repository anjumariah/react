import { FETCH_SPECDATA_REQUEST,FETCH_SPECDATA_SUCCESS,FETCH_SPECDATA_FAILURE } from "./specType"



const initialState = {
    loading :false,
    specData : [],
    error: ''
}

const specReducer = ( state = initialState, action) => {
    switch(action.type) {
        case FETCH_SPECDATA_REQUEST :
            return {
                ...state,
                loading:true
            }
        case FETCH_SPECDATA_SUCCESS :
             
            return{
                loading :false,
                specData :action.payload,
                error: ''
            }
            
        case FETCH_SPECDATA_FAILURE :
            return {
                loading: false,
                specData : [],
                error: action.payload

            } 
        default : return state
        
}
}
export default specReducer   