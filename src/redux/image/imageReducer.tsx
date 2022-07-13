import { FETCH_IMAGEDATA_FAILURE, FETCH_IMAGEDATA_REQUEST, FETCH_IMAGEDATA_SUCCESS } from "./imageType"

interface Props {
    loading: boolean;
    headerData: never[];
    error: string | undefined;
    action: any
    type:string
    payload :string
    
}

const initialState = {
    loading :false,
    imageData : [],
    error: ''
}

const imageReducer = ( state = initialState, action:Props) => {
    switch(action.type) {
        case FETCH_IMAGEDATA_REQUEST :
            return {
                ...state,
                loading:true
            }
        case FETCH_IMAGEDATA_SUCCESS :
            return{
                loading :false,
                imageData :action.payload,
                error: ''
            }
        case FETCH_IMAGEDATA_FAILURE :
            return {
                loading: false,
                imageData : [],
                error: action.payload

            } 
            default : return state
        
}
}
export default imageReducer  