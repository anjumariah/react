import { FETCH_FOOTERDATA_FAILURE, FETCH_FOOTERDATA_REQUEST, FETCH_FOOTERDATA_SUCCESS } from "./footerTypes"

type FooterReducerProp= {
    loading: boolean;
    headerData: never[];
    error: string | undefined;
    action: any
    type:string
    payload ?:string
    
} 

const initialState = {
    loading :false,
    footerData : [],
    error: ''
}

const footerReducer = ( state = initialState, action:FooterReducerProp) => {
    switch(action.type) {
        case FETCH_FOOTERDATA_REQUEST :
            return {
                ...state,
                loading:true
            }
        case FETCH_FOOTERDATA_SUCCESS :
            return{
                loading :false,
                footerData :action.payload,
                error: ''
            }
        case FETCH_FOOTERDATA_FAILURE :
            return {
                loading: false,
                footerData : [],
                error: action.payload

            } 
            default : return state
        
}
}
export default footerReducer   