import { FETCH_HEADERDATA_FAILURE, FETCH_HEADERDATA_REQUEST, FETCH_HEADERDATA_SUCCESS } from "./headerTypes"


type HeaderReducerProp= {
    loading: boolean;
    headerData: never[];
    error: string | undefined;
    action: any
    type:string
    payload :string
    
} 

const initialState = {
    loading :false,
    headerData : [],
    error: ''
}

const headerReducer = ( state = initialState, action:HeaderReducerProp) => {
    switch(action.type) {
        case FETCH_HEADERDATA_REQUEST :
            return {
                ...state,
                loading:true
            }
        case FETCH_HEADERDATA_SUCCESS :
            return{
                loading :false,
                headerData :action.payload,
                error: ''
            }
        case FETCH_HEADERDATA_FAILURE :
            return {
                loading: false,
                headerData : [],
                error: action.payload

            } 
        default : return state
        
}
}
export default headerReducer   