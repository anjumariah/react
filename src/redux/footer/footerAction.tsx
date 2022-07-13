import axios from "axios"
import { FETCH_FOOTERDATA_FAILURE, 
    FETCH_FOOTERDATA_REQUEST, 
    FETCH_FOOTERDATA_SUCCESS } from "./footerTypes"

    export interface FooterReduxProps {
        footerData: string
        error: null
        dispatch: any        
    }


export const fetchFooterDataRequest = () => {
    return {
        type : FETCH_FOOTERDATA_REQUEST
    }
}

 const fetchFooterDataSuccess = (footerData:FooterReduxProps) => {
    return {
        type :FETCH_FOOTERDATA_SUCCESS,
        payload : footerData
    }
}

 const fetchFooterDataFailure = (error : FooterReduxProps) => {
    return {
        type : FETCH_FOOTERDATA_FAILURE,
        payload : error
}
}

export const fetchFooter  = () => {
    return (dispatch: any) => {
        dispatch(fetchFooterDataRequest)
        axios.get(
            `${process.env.REACT_APP_SECRET_FOOTER_DATA}`
            )
       .then((response) => {
        console.log(response);
        const footerData = response.data;
        dispatch(fetchFooterDataSuccess(footerData))
          
        })
        .catch (error => {
            const errorMsg = error.message
            dispatch(fetchFooterDataFailure(errorMsg))
        })
    }
}